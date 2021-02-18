import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);
  // del e.target
  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  const reset =() =>{
    setValues(initialState);
  }

  return [ values, handleInputChange, reset];
};