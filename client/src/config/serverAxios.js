import axios from "axios";

const serverAxios = axios.create({
  baseURL: "https://spotiapp-server.herokuapp.com/",
});

export default serverAxios;
