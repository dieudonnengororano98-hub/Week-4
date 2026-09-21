import { useState } from "react";

const useForm = (callback, initialState) => {
  

  return {
    inputs,
    handleInputChange,
    handleSubmit,
  };
};

export { useForm };