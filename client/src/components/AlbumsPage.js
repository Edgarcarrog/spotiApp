import { context } from "../context/context";
import { useContext, useEffect } from "react";
import { Container, Grid } from "@mui/material";
import AlbumCard from "./AlbumCard";

const AlbumsPage = () => {
  const { artist, albums } = useContext(context);

  useEffect(() => {
    console.log("useEffect");
  }, [albums]);

  return (
    <div>
      <h2>Albums de {artist}</h2>
      {!albums ? (
        null
      ) : (
        <Container maxWidth="xl" sx={{ p: 0 }}>
          <Grid
            container
            spacing={0}
            sx={{ m: 0, p: 0, pl: 0 }}
            justifyContent="center"
            alignItems="center"
          >
            {albums.map((item) => {
              return (
                <AlbumCard
                  key={item.id}
                  item={item}
                  sx={{ m: 0, p: 0, pl: 0 }}
                />
              );
            })}
          </Grid>
        </Container>
      )}
    </div>
  );
};

export default AlbumsPage;
