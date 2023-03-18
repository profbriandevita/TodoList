import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash  } from '@fortawesome/free-solid-svg-icons'
 

export const Header = ({verCompletadas, setVerCompletadas}) => {



  const tareasCompeltadas = () => {
    setVerCompletadas(!verCompletadas)
  }

  return (
    <header className='header' >
        <h1 className='header__titulo'>Todo Lista</h1>
         { verCompletadas ?
          <button className='header__boton'
          onClick={ () => tareasCompeltadas()}
          >
            No mostrar completadas
            <FontAwesomeIcon icon={faEyeSlash} className='header__icono-boton'/>
            
          
        </button>
         :
            <button className='header__boton'
            onClick={ () => tareasCompeltadas()}
            >
            Mostrar completadas
            <FontAwesomeIcon icon={faEye} className='header__icono-boton'/>
        </button>
         }
       
    </header>
  )
}
