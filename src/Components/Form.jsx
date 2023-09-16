import React from "react";
import { useContextGlobal } from "./utils/global.context.jsx";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const {state} = useContextGlobal()

  const handleChange = (e) => {
    e.preventDefault()
  }

  return (
    <div className={state.teme}>
      <form>
        <input type="text" name="userName" onChange={handleChange}/>
        <input type="text" name="email" onChange={handleChange}/>
        <button>Send</button>
      </form>
    </div>
  );
};

export default Form;
