

export const getTareasGuardadas = () => {
    const tareasGuardadas  = localStorage.getItem('tareas') ? 
    JSON.parse(localStorage.getItem('tareas')) : []
    return tareasGuardadas

}
