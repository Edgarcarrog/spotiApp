import serverAxios from "../config/serverAxios";
import APIAxios from "../config/apiAxios";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const CardComponent = ({ item }) => {
  const image = item.images[0] ? item.images[0].url : null;
  const id = item.id;
  const searchArtist = async () => {
    console.log(id);
    try {
      const response = await serverAxios.get("/");
      const token = response.data.token;
      const info = await APIAxios.get(
        `/artists/${id}/albums?limit=50&offset=50`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(info);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} sx={{ m: 0, p: 0 }}>
      <Card sx={{ maxWidth: 345, m: 2 }}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#" onClick={searchArtist}>
          <CardMedia
            component="img"
            height="340"
            width="240"
            image={image}
            alt="sin imagen"
          />
        </a>
        <CardContent
          sx={{
            height: 50,
          }}
        >
          <Typography
            gutterBottom
            height="340"
            variant="subtitle2"
            component="div"
          >
            {item.name}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CardComponent;
