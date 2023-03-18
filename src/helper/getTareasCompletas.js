
export const getTareasCompletas = () => {
    let tareasCompletadas  = ''

    if (localStorage.getItem('verCompletadas') === null) {
      return tareasCompletadas = true;
    } else {
      return tareasCompletadas = localStorage.getItem('verCompletadas') === 'true'
    }

}
