/* eslint-disable react/jsx-no-duplicate-props */
import React, { useContext } from "react";
import { CategoriasContext } from "../context/CategoriasContext";
import { RecetasContext } from "../context/RecetasContext";
import { useForm } from "../hooks/useForm";

export const Formulario = () => {
  const [formValues, handleInputChange, reset] = useForm({
    nombre: "",
    categoria: "",
  });
  const { nombre, categoria } = formValues;

  // categorias las traigo de categoriascontext, la funcion esta en el provider
  const { categorias } = useContext(CategoriasContext);

  // trayendo las funciones de RecetasContext
  const {buscarRecetas, guardarConsultar} = useContext(RecetasContext)


  // Función para buscar receta en el formulario 
  const handleSubmit= (e)=>{
    e.preventDefault();
    // Estos de RecetasContext
    guardarConsultar(true);
    buscarRecetas(formValues);
    reset();
  }
  return (
    <form className="col-md-12" onSubmit={handleSubmit}>
      <fieldset className="text-center">
        <legend>Busca bebidas por categoría o ingrediente</legend>
      </fieldset>
      <div className="row mt-4">
        <div className="col-md-4">
          <input
            type="text"
            value={nombre}
            onChange={handleInputChange}
            name="nombre"
            className="form-control"
            placeholder="Buscar por ingrediente"
          />
        </div>
        <div className="col-md-4">
          <select
            name=""
            id=""
            className="form-select"
            name="categoria"
            value={categoria}
            onChange={handleInputChange}
          >
            <option value="">--Seleccionar categoría--</option>
            {categorias.map((categoria) => (
              <option key={categoria.strCategory} value={categoria.strCategory}>
                {categoria.strCategory}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <input
            type="submit"
            className="btn btn-primary col-12"
            value="Buscar bebida"
          />
        </div>
      </div>
    </form>
  );
};
