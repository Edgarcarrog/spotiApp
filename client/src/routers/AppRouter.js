import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../components/HomePage";
import AlbumsPage from "../components/AlbumsPage";
import MyProvider from "../context/context";

const AppRouter = () => {
  return (
    <MyProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/albums" element={<AlbumsPage />} />
        </Routes>
      </BrowserRouter>
    </MyProvider>
  );
};

export default AppRouter;
