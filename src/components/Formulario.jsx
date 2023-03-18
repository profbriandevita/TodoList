import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Swal from 'sweetalert2'


export const Formulario = ({tareas, setTareas}) => {

  const  [tarea, setTarea] = useState('')

  
  const handleInput = (e) => {
    const input = e.target.value
    setTarea(input)
  }

  const handleSubmit = (e) => {
     e.preventDefault();
     const nuevaTarea = {
      id : uuidv4(), 
      texto: tarea,
      completada: false,
     }
     if ( nuevaTarea.texto === '')return
     setTareas([...tareas, nuevaTarea])
     Swal.fire(
      'Bien hecho!',
      'Has agregado una nueva tarea!',
      'success'
    )
     setTarea('')

  }

  return (
    <form action="" className="formulario-tareas" onSubmit={handleSubmit}>
      <input
        type="text"
        className="formulario-tareas__input"
        placeholder="Escribe la tarea"
        value={tarea}
        onChange={(e) => handleInput(e)}
      />
      <button
      type='submit'
      className='formulario-tareas__btn'
      >
        <FontAwesomeIcon 
            icon={faPlusSquare}
            className='formulario-tareas__icono-btn'
        />
      </button>
    </form>
  );
};
