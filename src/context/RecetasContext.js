import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const RecetasContext = createContext();

export const RecetasProvider = (props) => {
  const [busqueda, buscarRecetas] = useState({ nombre: "", categoria: "" });
  const [recetas, guardarReceta] = useState([]);
  const [consultar, guardarConsultar] = useState(false);
  const { nombre, categoria } = busqueda;
  useEffect(() => {
    if (consultar) {
      const obtenerRecetas = async () => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;
        const resp= await axios.get(url);
        // Guardo el resultado en el state de receta
        guardarReceta(resp.data.drinks);
      };

      obtenerRecetas();
    }
  }, [busqueda, categoria, consultar, nombre]);
  return (
    <RecetasContext.Provider
      value={{ recetas, buscarRecetas, guardarReceta, guardarConsultar }}
    >
      {props.children}
    </RecetasContext.Provider>
  );
};
