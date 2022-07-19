const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const request = require("request");

const PORT = process.env.PORT || 5000;

var spotify_client_id = process.env.SPOTIFY_CLIENT_ID;
var spotify_client_secret = process.env.SPOTIFY_CLIENT_SECRET;

var app = express();

app.use(cors());

var authOptions = {
  url: "https://accounts.spotify.com/api/token",
  headers: {
    Authorization:
      "Basic " +
      new Buffer.from(spotify_client_id + ":" + spotify_client_secret).toString(
        "base64"
      ),
  },
  form: {
    grant_type: "client_credentials",
  },
  json: true,
};

app.get("/", (req, res) => {
  request.post(authOptions, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      var token = body.access_token;
      console.log(token);
      res.json({ token });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
