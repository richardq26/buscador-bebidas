/* eslint-disable react/style-prop-object */
/* eslint-disable react/jsx-no-duplicate-props */
import React, { useContext, useState } from "react";
import { ModalContext } from "../context/ModalContext";

// Importando lo necesario para el modal
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

// El prop receta de ListaRecetas.js
export const Receta = ({ receta }) => {

  // Configuración del modal de material-ui
  const[modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  // Para usar el useStyles le creamos clases
  const clases = useStyles();

  //Cuando presione el botón ver receta
  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () =>{
    setOpen(false);
  }

  ///////////////////////////////////////////////////////////////
  // Extraer los valores del context
  const { guardarIdReceta, inforeceta } = useContext(ModalContext);
  ////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////

  const mostrarIngredientes = (info) =>{
    let ingredientes = [];
    for(let i = 1; i<16; i++){
      if(info[`strIngredient${i}`]){
        ingredientes.push(<li key={i}>{info[`strIngredient${i}`]} {info[`strMeasure${i}`]}</li>)
      }
    }

    return ingredientes;
  }


  return (
    <div className="col-md-3 col-sm-4 mb-3">
      <div className="card">
        <img
          src={receta.strDrinkThumb}
          className="card-img-top card-body"
          alt={`Imagen de ${receta.StrDrink}`}
        />
        <div className="card-body">
          <h5 className="card-title">{receta.strDrink}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button
            onClick={() => {guardarIdReceta(receta.idDrink); handleOpen();}}
            className="btn btn-primary col-12"
          >
            Ver receta
          </button>
          <Modal open={open} onClose={()=>{handleClose(); guardarIdReceta(null);}}>
            <div style={modalStyle} className={clases.paper}>
              <h2>{inforeceta.strDrink}</h2>
              <h3 className="mt-4">Instrucciones</h3>
              <p>{inforeceta.strInstructions}</p>
              <img src={inforeceta.strDrinkThumb} alt =" " className="img-fluid my-4"/>
              <h3>Ingredientes y cantidades</h3>
              <ul>
                {mostrarIngredientes(inforeceta)}
              </ul>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};
