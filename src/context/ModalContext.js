import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ModalContext = createContext();

export const ModalProvider = (props) => {
  // State del provider
  const [idreceta, guardarIdReceta] = useState(null);

  const [inforeceta, guardarReceta] = useState({});
  //Una vez que tenemos un id de receta, mandamos llamar al api
  useEffect(() => {
    if (!idreceta) return;
    const obtenerReceta = async () => {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`;
      const resp = await axios.get(url);
      guardarReceta(resp.data.drinks[0]);
    };

    obtenerReceta();

    return () =>{
      // Lo que hacemos cuando se destruye el componente
      guardarReceta({});
    }
  }, [idreceta]);

  return (
    <ModalContext.Provider
      value={{
        inforeceta,
        guardarIdReceta
        
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};
