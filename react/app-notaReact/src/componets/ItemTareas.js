import React from 'react';

const Itemtareas = (
    {tarea:{id,description, done}, index,
     handleDelete,
    handleUpdate,
}
) => {
    return (
        <li
        key={id}
        className="d-flex justify-content-between align-items-center"
        >
                     <p
                     onClick={()=>handleUpdate(id)}
                     className ={done && 'text-decoration-line-through'}
                     >
                    {index+1}.{description}
                     </p>
                     <button
                     className='btn btn-sm btn-danger mb-1'
                     onClick={()=>handleDelete(id)}
                     >
<i
className='fas btn.sm btn-danger mb-1'

></i>

                     </button>

        </li>
    );
}

export default Itemtareas;
