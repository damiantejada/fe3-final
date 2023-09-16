import React, { useState } from "react";
import { useContextGlobal } from "../Components/utils/global.context.jsx"; 

const Form = () => {
  const { state } = useContextGlobal()

  const [datos, setDatos] = useState({
    nombre: "",
    email: "",
  });

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatos({ ...datos, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (datos.nombre.length <= 5) {
      setError("Por favor verifique su información nuevamente")
      setSuccessMessage("");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(datos.email)) {
      setError("Por favor verifique su información nuevamente")
      setSuccessMessage("");
      return;
    }

    setSuccessMessage(`Gracias ${datos.nombre}, te contactaremos lo antes posible vía correo electrónico.`);
    setError("");
  };

  return (
    <div className={state.theme}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre completo"
          onChange={handleChange}
          value={datos.nombre}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={datos.email}
        />
        <button type="submit">Enviar</button>
      </form>
      {error && <p className="error">{error}</p>}
      {successMessage && <p className="success">{successMessage}</p>}
    </div>
  );
};

export default Form;