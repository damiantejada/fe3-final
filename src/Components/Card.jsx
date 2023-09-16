import React from "react"
import { Link } from 'react-router-dom'
import { useContextGlobal } from "./utils/global.context.jsx";

const Card = ({dentista}) => {

  const {state, dispatch} = useContextGlobal()

  const addFav = () => {
    const dentistaBuscado = state.favoritos.filter(favorito => favorito.id === dentista.id).length > 0;
      if (!dentistaBuscado) {
      dispatch({ type: 'AGREGAR_FAVORITO', payload: dentista })
      alert('Dentista agregado a Favs con éxito')
    } else {
      alert('El dentista ya está en la lista de favoritos');
    }
  }
  
  

  return (
    <div className="card">
        <Link to={'/dentist/' + dentista.id}>
        <img src='./images/doctor.jpg' alt="" style={{ width: '100%' }} />
        <h3>{dentista.name}</h3>
        </Link>
        <h4>{dentista.username}</h4>

        <button onClick={addFav} className="favButton">⭐</button>
    </div>
  );
};

export default Card