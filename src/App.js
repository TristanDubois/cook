import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { CocktailList } from "./components/CocktailList";
import { Cocktail } from "./components/Cocktail";
import RegisterForm from "./components/RegisterForm";
import ConnectionForm from "./components/ConnectionForm";
import UserAccount from "./components/UserAccount";
import MyCocktail from "./components/MyCocktail";

function App() {
  const [cocktails, setCocktails] = useState([]);

  // on récupére les cocktails de l'api
  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=all")
      .then((response) => response.json())
      .then((data) => setCocktails(data.drinks));
  }, []);

  const isAuthenticated = localStorage.getItem("isAuthenticated"); // PERMET DE SAVOIR SI ON EST IDENTIFIER OU PAS

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} element={<CocktailList cocktails={cocktails} />} />
          <Route path={"/cocktail/:cocktailid"} element={<Cocktail cocktails={cocktails} />} />
          <Route path={"/mycocktail/:id"} element={<MyCocktail />} />
          <Route path={"/register"} element={<RegisterForm />} />
          <Route path={"/connection"} element={<ConnectionForm />} />
          <Route path={"/useraccount"} element={<UserAccount />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
