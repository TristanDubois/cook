import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { verifyNewUser } from "../actions/registerAction";

const RegisterForm = () => {
  const { errorMsg } = useSelector((state) => state.accountReducer);
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handlerSubmit = (e) => {
    e.preventDefault();
    let date = new Date().getTime();
    let id = parseInt(date);
    dispatch(verifyNewUser({ user: { id, mail, password } }));
  };

  return (
    <>
      <form onSubmit={(e) => handlerSubmit(e)} className="Formregister">
        <h2>S'enregistrer</h2>
        {errorMsg !== "" && <p>{errorMsg}</p>}
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
        <button type="submit">Créer</button>
      </form>
    </>
  );
};

export default RegisterForm;
