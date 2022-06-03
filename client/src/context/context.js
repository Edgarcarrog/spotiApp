import { createContext, useReducer, useEffect } from "react";
import APIAxios from "../config/apiAxios";
import serverAxios from "../config/serverAxios";
import reducer from "./reducer";

export const context = createContext();

const Provider = ({ children }) => {
  const initialState = {
    artist: null,
    albums: null,
  };

  //Dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(reducer, initialState);

  const setAlbums = async (id) => {
    let data = null;
    dispatch({
      type: "ADD_ALBUMS",
      payload: null,
    });
    try {
      const response = await serverAxios.get("/");
      const token = response.data.token;
      data = await APIAxios.get(`/artists/${id}/albums?limit=20`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(data);
    } catch (error) {
      console.log(error.response);
    }
    dispatch({
      type: "ADD_ALBUMS",
      payload: data.data.items,
    });
  };

  const setArtist = (artist) => {
    dispatch({
      type: "SET_ARTIST",
      payload: artist,
    });
  };
  return (
    <context.Provider
      value={{
        artist: state.artist,
        albums: state.albums,
        setAlbums,
        setArtist,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default Provider;
