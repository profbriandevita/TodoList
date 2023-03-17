
import { useEffect, useState } from 'react'
import './App.css'
import { Formulario, Header,ListarTareas } from './components/'




function App() {

  const tareasGuardadas  = localStorage.getItem('tareas') ? 
  JSON.parse(localStorage.getItem('tareas')) : []

  const  [tareas, setTareas] = useState(tareasGuardadas)



  let tareasCompletadas  = ''

  if (localStorage.getItem('verCompletadas') === null) {
    tareasCompletadas = true;
  } else {
    tareasCompletadas = localStorage.getItem('verCompletadas') === 'true'
  }

  const [verCompletadas, setVerCompletadas] = useState(tareasCompletadas)


  useEffect(() => {
    localStorage.setItem('verCompletadas', verCompletadas.toString())
  }, [verCompletadas])
  


  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas))
  }, [tareas])
  


  return (
   <>
     <div className='contenedor'>
        <Header verCompletadas={verCompletadas} setVerCompletadas={setVerCompletadas}/>
        <Formulario tareas={tareas} setTareas={setTareas} />
        <ListarTareas tareas={tareas}  setTareas={setTareas} verCompletadas={verCompletadas} />
     </div>
   
   </>
  )
}

export default App
