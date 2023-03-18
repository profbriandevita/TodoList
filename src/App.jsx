import { useEffect, useState } from 'react';
import './App.css';
import { Formulario, Header, ListarTareas } from './components/';
import { getTareasCompletas,getTareasGuardadas  } from './helper/';


function App() {
  const [tareas, setTareas] = useState(getTareasGuardadas());

  const [verCompletadas, setVerCompletadas] = useState(getTareasCompletas());

  useEffect(() => {
    localStorage.setItem('verCompletadas', verCompletadas.toString());
  }, [verCompletadas]);

  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);

  return (
    <>
      <div className="contenedor">
        <Header
          verCompletadas={verCompletadas}
          setVerCompletadas={setVerCompletadas}
        />
        <Formulario tareas={tareas} setTareas={setTareas} />
        <ListarTareas
          tareas={tareas}
          setTareas={setTareas}
          verCompletadas={verCompletadas}
        />
      </div>
    </>
  );
}

export default App;
