import { useState } from "react";
import { useDispatch } from "react-redux";
import { addRecipe } from "../actions/createAction";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const CreateRecipeForm = () => {
  //const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priv, setPriv] = useState(false);
  const [image, setImage] = useState("");
  const [ingr1, setIngr1] = useState("");
  const [ingr2, setIngr2] = useState("");
  const [ingr3, setIngr3] = useState("");
  const [meas1, setMeas1] = useState("");
  const [meas2, setMeas2] = useState("");
  const [meas3, setMeas3] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handlerSubmit = (e) => {
    console.log("handler test");
    e.preventDefault();
    dispatch(
      addRecipe({
        recipe: {
          id: new Date().getTime(),
          title,
          description,
          image,
          ingr1,
          ingr2,
          ingr3,
          meas1,
          meas2,
          meas3,
          priv,
        },
      })
    );
    alert("Recette bien ajouté");
    navigate("/");
  };

  return (
    <>
      <form className="NewRecipe" onSubmit={(e) => handlerSubmit(e)}>
        <h2>Créer un cocktail</h2>
        <div>
          <label htmlFor="title">Nom :</label>
          <input
            name="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label htmlFor="description">Description :</label>
          <textarea
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <label htmlFor="image">Image</label>
          <input
            type="text"
            name="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />

          <label htmlFor="priv">Recette privée ?</label>
          <input
            type="checkbox"
            name="priv"
            value={priv}
            onChange={(e) => setPriv(e.target.checked)}
          />
          <div>
            <label htmlFor="ingr1">Ingrédient 1</label>
            <input
              type="text"
              name="ingr1"
              value={ingr1}
              onChange={(e) => setIngr1(e.target.value)}
            />

            <label htmlFor="meas1">Mesure de l'ingrédient 1</label>
            <input
              type="text"
              name="meas1"
              value={meas1}
              onChange={(e) => setMeas1(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="ingr2">Ingrédient 2</label>
            <input
              type="text"
              name="ingr2"
              value={ingr2}
              onChange={(e) => setIngr2(e.target.value)}
            />

            <label htmlFor="meas2">Mesure de l'ingrédient 2</label>
            <input
              type="text"
              name="meas2"
              value={meas2}
              onChange={(e) => setMeas2(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="ingr3">Ingrédient 3</label>
            <input
              type="text"
              name="ingr3"
              value={ingr3}
              onChange={(e) => setIngr3(e.target.value)}
            />

            <label htmlFor="meas3">Mesure de l'ingrédient 3</label>
            <input
              type="text"
              name="meas3"
              value={meas3}
              onChange={(e) => setMeas3(e.target.value)}
            />
          </div>
          <button type="submit">Ajouter ma recette</button>
        </div>
      </form>
    </>
  );
};
