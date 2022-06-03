import { context } from "../context/context";
import { useContext } from "react";
import music from "../assets/music.png";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";

const CardComponent = ({ item }) => {
  const { setArtist, setAlbums } = useContext(context);
  const image = item.images[0] ? item.images[0].url : music;
  console.log(image);
  const id = item.id;

  const setData = (artist, id) => {
    setArtist(artist);
    setAlbums(id);
  };

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} sx={{ m: 0, p: 0, pl: 0 }}>
      <Card sx={{ m: 2, p: 0, pl: 0 }}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <NavLink to="/albums" onClick={() => setData(item.name, id)}>
          <CardMedia
            className="card-image"
            component="img"
            height="340"
            image={image}
            alt={item.name}
          />
          <CardContent
            sx={{
              height: 50,
            }}
          >
            <Typography gutterBottom variant="subtitle2" component="div">
              {item.name}
            </Typography>
          </CardContent>
        </NavLink>
      </Card>
    </Grid>
  );
};

export default CardComponent;
