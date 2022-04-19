
const TareasReduce = (state =[], action) => {
 switch (action.type) {
     case "agregar":   
    //  traigo toda las tarea que tengo en el estado
    // y me tre la nueva tarea en el payload 
         return [...state, action.payload];


      case "borrar":
          
    //   filtro el estado cuyo id con no consida con el id del payload 
      return state.filter(tarea => tarea.id !== action.payload)
 
case "actualizas":
    return state.map(tarea =>
        // al negar la tarea va a cambiar el valor del booleeano
        // que me traiga lo contrario de la done de la tarea
        // solamente se va a modificar la tarea que machee con id
        (tarea.id === action.payload)?{...tarea, done:!tarea.done}:tarea
        )


     default:
         return state
 }
}

export default TareasReduce;
