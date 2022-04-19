import React from 'react';
import ItemTareas from './ItemTareas';

const ListTareas = (tareas, handleDelete,handleUpdate) => {
    return (
        <ul 
        className='list-group list-group-flush px-4'
        >
        
        {
         tareas.map((tarea,index)=>(

            <ItemTareas
            key={tarea.id}
            tarea ={tarea}
            index = {index}
            handleDelete = {handleDelete}
            handleUpdate = {handleUpdate}
            />
         ))
        }


        </ul>
    );
}

export default ListTareas;
