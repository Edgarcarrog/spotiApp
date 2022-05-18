import axios from "axios";

const APIAxios = axios.create({
  baseURL: "https://api.spotify.com/v1",
});

export default APIAxios;
