import React from 'react';
import { useForm } from '../hooks/useForm';
const AddTareas = ({handleAdd}) => {
// lo que voy a destructura de los campo en esta ocasion va a ser la description
// pero podria ser los campos de los formularios
// useform va a manejar al input 
const [{description, handleInputChange, reset}] = useForm({
    description:"",
})
const handleSubmit = (e)=>{

e.preventDefault();
if (description.trim().length < 1) {
    return
    
}

const nuevaTarea = {
id:new Date().getTime(),
description,
done:false
}

handleAdd(nuevaTarea);

reset()

}

    return (
        <form onSubmit={handleSubmit}>
<input type="text"
 name ="description"
  placeholder='Aprender...'
   autoComplete='off'
    className='form-control'
    onChange={handleInputChange}
    value={description}
    
    
    />
 

 <button type='submit' className='btn btn-primary w-100 mt-2 ' >agregar</button>
        </form>
    );
}

export default AddTareas;
