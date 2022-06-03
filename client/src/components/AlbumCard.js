
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const AlbumCard = ({ item }) => {
  const image = item.images[0] ? item.images[0].url : null;

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} sx={{ m: 0, p: 0, pl: 0 }}>
      <Card sx={{ m: 2, p: 0, pl: 0 }}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <CardMedia
          component="img"
          height="340"
          width="240"
          image={image}
          alt="sin imagen"
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
      </Card>
    </Grid>
  );
};

export default AlbumCard;
