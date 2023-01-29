import {BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Inscription from "./pages/Inscription";
import ListeEnchere from "./pages/ListeEnchere";
import { ListProducts } from "./pages/Products/ListProducts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={ <Login /> } />  
        <Route path="/inscription" element={ <Inscription /> } />  
        <Route path="/" element={ <Layout /> } >
          <Route path="home" element={ <Home /> } />
          <Route path="/liste-enchere" element={ <ListeEnchere /> } />
        </Route>
        <Route path="/liste" element={<ListProducts/>}  />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
