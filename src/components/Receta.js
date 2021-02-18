/* eslint-disable react/style-prop-object */
/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
//<div className="col-md-4 mb-3">
export const Receta = ({ receta }) => {
  return (
    <div className="col-md-4 mb-3">
      <div class="card">
        <img
          src={receta.strDrinkThumb}
          className="card-img-top card-body"
          alt={`Imagen de ${receta.StrDrink}`}
        />
        <div class="card-body">
          <h5 class="card-title">{receta.strDrink}</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button class="btn btn-primary col-12">
            Ver receta
          </button>
        </div>
      </div>
    </div>
  );
};
