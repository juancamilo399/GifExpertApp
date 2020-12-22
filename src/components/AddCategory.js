import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategory}) => {

    const [inputValue, setinputValue] = useState('hola')

    const handleInputChange = (e) =>{
        setinputValue(e.target.value)

    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (inputValue.trim().length>2){
            setCategory(cats=>[inputValue,...cats])
            setinputValue('')

        }
        

    }

    return (
        <>
           <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </form>
           
            
        </>
    )

    
}

AddCategory.propTypes = {
    setCategory: PropTypes.func.isRequired
}
