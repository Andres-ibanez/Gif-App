import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setinputValue] = useState('');

    //Funcion que controla el cambio en la caja de texto
    const handleInputChange = (e) => {
        setinputValue( e.target.value );    
    }

    //Funcion que observa el evento de envio del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        if( inputValue.trim().length >2 ){
            //recibiendo solamente la funcion, debemos pasar un callback donde hacemos referencia al estado anterior
            setCategories(categories => [inputValue, ...categories]);
            setinputValue('');
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />            
        </form>
    )
}

//Usando PropTypes para indicar que setCateries es un parametro obligatorio
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}