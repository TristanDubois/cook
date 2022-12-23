import { Navigation } from "./Navigation";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div className="Header">
      <iframe
        width="50"
        height="35"
        src="https://www.youtube.com/embed/IzRGy4dvJpA?autoplay=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <h1>
        <NavLink to={"/"}>My Cocktails Recipes</NavLink>
      </h1>
      <img
        className="logotop"
        src="https://cocktailsanddreams.co.in/wp-content/uploads/2018/01/cdn1-logo.gif"
        alt="cocktail"
      />
      <Navigation />
    </div>
  );
};
