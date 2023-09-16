import React from 'react'
import { Link } from 'react-router-dom'
import { useContextGlobal } from './utils/global.context.jsx'
import Button from 'react-bootstrap/Button'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {state,dispatch} = useContextGlobal()

  const cambiarTema = () => {
    const newTheme = state.theme === 'light' ? 'dark' : 'light'
    dispatch({ type: 'CAMBIAR_TEMA', payload: newTheme });
    console.log(state.theme)
  };
  

  return (
    <nav className={state.theme}>
      <div>
        <h1><span className='red'>D</span>H ODONTO</h1>
      </div>
      <div className='elementos'>
      <Link to='/home'>Home</Link>
      <Link to='/contact'>Contact</Link>
      <Link to='/favs'>Favs</Link>
      {state.theme === 'light' ? (
          <button onClick={cambiarTema} className='tema'>🌙</button>
        ) : (
          <button onClick={cambiarTema} className='tema'>☀️</button>
        )}
      </div>     
    </nav>
  )
}

export default Navbar