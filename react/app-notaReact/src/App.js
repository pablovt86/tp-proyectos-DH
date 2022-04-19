import { useEffect,useReducer} from 'react'
import ListTareas from './componets/ListTareas';
import AddTareas from './componets/AddTareas';
import './App.css';
import TareasReduce from './reducers/tareasReduce';


function App() {

  const init = ()=>{
    //con esta funcion parse lo localstorage si la propiedad tarea no existe 
    // vuelvo el estado inicial que es un array vacio
    return JSON.parse(localStorage.getItem('tareas'))||[];
  }
  
  // con init le doy la chance de leer lo que hay en local storage. por que primeramente
  // va estar en un array vacio

  // mi estado general va a ser cuando vaya modificando las tareas cuando dispare el dispatch
const[tareas,dispatch] = useReducer(TareasReduce,[],init)
// cuando se va ejecutar este collback cuando cambie tareas
// voy asignarle un valor a localstorage primero lo tengo  que stringify
useEffect(() => {
  localStorage.setItem('tareas', JSON.stringify(tareas))
 
}, [tareas]);

// primero recibe dos propiedades type y payload
const handleAdd = (tarea)=>{
const agregarTarea = {
type:"agregar",
payload:tarea

}
// al dispartch le paso la accion de agregar tarea
dispatch(agregarTarea)

}


const handleDelete = (id)=>{
  const borrarTarea = {
    type:"borrar",
    payload:id
  }
  dispatch(borrarTarea)
}
const handleUpdate = (id)=>{

  const actualizarTarea = {
    type:"actualizar",
    payload:id
  }
  dispatch(actualizarTarea)
}

  return (
    <div  className='container'>
      <h1>tareas</h1>
      <hr></hr>
      <h4>total de tareas:</h4>
   <hr></hr>
   <div className='row'>
     <div className='col-7'>
<ListTareas
       tareas = {tareas}
       handleDelete= {handleDelete}
       handleUpdate = {handleUpdate}
       />
           </div>
     <div className='col-5'></div>
     <AddTareas
     handleAdd = {handleAdd}
     
     />
     
     </div>    
    </div>
  );
  }


  
export default App;
