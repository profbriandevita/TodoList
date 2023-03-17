import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faEdit, faSquare, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export const Tareas = ({ tarea, tareaCompletada, editaTarea, eliminarTarea}) => {

  const [editarTarea, setEditarTarea] = useState(false)
  const [nuevaTarea, setNuevaTarea] = useState(tarea.texto)

  const handleSubmit = (e) => {
    e.preventDefault();
    editaTarea(tarea.id, nuevaTarea)
    setEditarTarea(false)
  }


  return (
    <li className="lista-tareas__tarea">
      <FontAwesomeIcon
        icon={tarea.completada ? faCheckSquare: faSquare}
        className="lista-tareas__icono lista-tareas__icono-check"
        onClick={ () => tareaCompletada(tarea.id)}
      />

      <div className="lista-tareas__texto">
        {editarTarea ?
        <form action="" className='formulario-editar-tarea' onSubmit={handleSubmit}>
            <input type="text"
              className='formulario-editar-tarea__input'
              value={nuevaTarea}
              onChange={ (e) => setNuevaTarea(e.target.value) }
            />
            <button
             type='submit'
             className='formulario-editar-tarea__btn'
            >
              Actualizar
            </button>
        </form>
        : tarea.texto
        }
        </div>

      <div className="lista-tareas__contenedor-botones">
        <FontAwesomeIcon
          icon={faEdit}
          className="lista-tareas__icono lista-tareas__icono-accion"
          onClick={() => setEditarTarea(!editarTarea) }
        />

        <FontAwesomeIcon
          icon={faTimes}
          className="lista-tareas__icono lista-tareas__icono-accion"
          onClick={() => eliminarTarea(tarea.id)}
        />
      </div>
    </li>
  );
};
