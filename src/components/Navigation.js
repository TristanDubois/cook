import { NavLink } from "react-router-dom";

export const Navigation = () => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  return (
    <>
      <div className="Navigation">
        <NavLink to={"/"}>Accueil</NavLink>
        {isAuthenticated && <NavLink to={"/useraccount"}>Mon compte</NavLink>}
        {!isAuthenticated && (
          <>
            <NavLink to={"/register"}>S'enregistrer</NavLink>
            <NavLink to={"/connection"}>Se connecter</NavLink>
          </>
        )}
      </div>
    </>
  );
};
