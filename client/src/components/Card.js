import { context } from "../context/context";
import { useContext } from "react";
import serverAxios from "../config/serverAxios";
import APIAxios from "../config/apiAxios";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";

const CardComponent = ({ item }) => {
  const { addAlbums } = useContext(context);
  const image = item.images[0] ? item.images[0].url : null;
  const id = item.id;
  const searchArtist = async () => {
    //console.log(id);
    try {
      const response = await serverAxios.get("/");
      const token = response.data.token;
      const info = await APIAxios.get(`/artists/${id}/albums?limit=50`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(info);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} sx={{ m: 0, p: 0, pl: 0 }}>
      <Card sx={{ m: 2, p: 0, pl: 0 }}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <NavLink to="/albums" onClick={() => addAlbums(id)}>
          <CardMedia
            component="img"
            height="340"
            width="240"
            image={image}
            alt="sin imagen"
          />
        </NavLink>
        <CardContent
          sx={{
            height: 50,
          }}
        >
          <Typography gutterBottom variant="subtitle2" component="div">
            {item.name}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CardComponent;
