import React, { createContext, useState } from "react";

export const RecetasContext = createContext();

export const RecetasProvider = (props) => {
    const [busqueda, buscarRecetas] = useState({nombre: '', categoria:''});
    const [receta, guardarReceta] = useState([]);
  return <RecetasContext.Provider value={{buscarRecetas, guardarReceta}}>{props.children}</RecetasContext.Provider>
};
