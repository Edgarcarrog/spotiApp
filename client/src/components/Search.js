import APIAxios from "../config/apiAxios";
import serverAxios from "../config/serverAxios";
import theme from "../styles/mui";
import { Fragment, useEffect, useState } from "react";
import { Button, Grid, TextField } from "@mui/material";
import CardComponent from "./Card";
import { ThemeProvider } from "@emotion/react";

const Search = () => {
  const [word, setWord] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    console.log("useEffect");
  }, [results]);

  const handleChange = (e) => {
    setWord(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      search();
      console.log(e.key);
    }
  };

  const search = async () => {
    if (word.trim()) {
      try {
        const response = await serverAxios.get("/");
        const token = response.data.token;
        const data = await APIAxios.get(
          `/search?q=${word}&type=artist&limit=10`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setResults(data.data.artists.items);
      } catch (error) {
        console.log(error.response);
      }
    }
  };

  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <Grid
          container
          sx={{ my: 4, mx: 0, p: 0 }}
          spacing={1}
          justifyContent="center"
          alignItems="flex-end"
        >
          <Grid item xs={11} sm={6} sx={{ m: 0, p: 0 }}>
            <TextField
              sx={{ m: 0, p: 0 }}
              id="standard-basic"
              className="text-input"
              label="Artista"
              variant="standard"
              color="primary"
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              margin="normal"
              fullWidth
            />
          </Grid>
          <Grid item xs={2} sx={{ p: 0 }}>
            <Button variant="contained" onClick={() => search()}>
              Buscar
            </Button>
          </Grid>
        </Grid>
        {results.length === 0 ? (
          <p>No hay nada</p>
        ) : (
          <>
            {results.map((item) => {
              return <CardComponent key={item.id} item={item} />;
            })}
          </>
        )}
      </ThemeProvider>
    </Fragment>
  );
};

export default Search;
