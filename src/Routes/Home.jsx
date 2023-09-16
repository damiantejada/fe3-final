import React from 'react'
import Card from '../Components/Card'
import { useContextGlobal } from '../Components/utils/global.context.jsx'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const {state} = useContextGlobal()

  return (
    <main className={state.theme}>
      <h1 className='home'>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {state.dentistas.map(dentista => (<Card dentista={dentista} key={dentista.id}/>))}
      </div>
    </main>
  )
}

export default Home