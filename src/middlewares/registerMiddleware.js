import { addError } from "../actions/registerAction";
import { addUser } from "../actions/registerAction";
const bcrypt = require("bcryptjs");
// import { BCRYPT } from "bcrypt";

export const registerMiddleware = (store) => (next) => (action) => {
  const { dispatch } = store;

  if (action.type === "VERIFY_NEW_USER") {
    // const dispatch = store.dispatch;
    let { id } = action.payload.user;
    let { mail } = action.payload.user;
    let { password } = action.payload.user;
    let { users } = store.getState().accountReducer;
    console.log(store.getState().accountReducer);

    // on vérifie que l'adresse mail n'est pas déjà utilisée
    const usersWithThisMail = users.filter((user) => user.mail === mail);
    if (usersWithThisMail.length > 0) {
      return dispatch(addError({ errorMsg: "adresse mail déjà utilisée" }));
    } else {
      bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(password, salt, function (err, hash) {
          alert("Utilisateur ajouté");
          return dispatch(addUser({ user: { id, mail, password: hash } }));
        });
      });
    }
  }
  return next(action);
};
