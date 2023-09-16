import React from 'react'
import { useContextGlobal } from './utils/global.context.jsx'

const Footer = () => {

  const {state} = useContextGlobal()

  return (
    <footer className={state.theme}>
        <div>
          <p>Powered by</p>
          <img src="./images/DH.png" alt='DH-logo'/>
        </div>
        <div>
          <img src="./images/ico-facebook.png" alt="" className='imagen' />
          <img src="./images/ico-instagram.png" alt="" className='imagen'/>
          <img src="./images/ico-whatsapp.png" alt="" className='imagen'/>
          <img src="./images/ico-tiktok.png" alt="" className='imagen'/>
        </div>
    </footer>
  )
}

export default Footer
