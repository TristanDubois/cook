import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const bcrypt = require("bcryptjs");

const ConnectionForm = () => {
  const { users } = useSelector((state) => state.accountReducer);
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handlerSubmit = (e) => {
    e.preventDefault();
    bcrypt.compare(password, users[0].password, function (err, res) {
      if (res === true) {
        localStorage.setItem("isAuthenticated", "true");
        alert("connecté");
        navigate("/");
        window.location.reload();
      } else {
        alert("Le mot de passe est erroné");
      }
    });
    // ca fonctionne ça, ca renvoie true ou false si c faux ou non
  };

  return (
    <>
      <form onSubmit={(e) => handlerSubmit(e)} className="Formregister">
        <h2>Connexion</h2>
        <label htmlFor="mail">Adresse mail</label>
        <input
          type="email"
          name="mail"
          value={mail}
          onChange={(e) => {
            setMail(e.target.value);
          }}
        />
        <label htmlFor="password">Mot de passe</label>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit">Se connecter</button>
      </form>
    </>
  );
};

export default ConnectionForm;
