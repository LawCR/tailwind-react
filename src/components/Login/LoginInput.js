import React, { useState } from 'react'
import './LoginInput.scss'

// Componente de Login - Input reutilizables
const LoginInput = (props) => {
    const [focused, setFocused] = useState(false)
    const { label, errorMessage, id, onChange, ...inputProps} = props

    // Función que cambiare el estado al dejar de focusear el input
    const handleFocus = (e) => {
        setFocused(true)
    }
    return (
        <div>
            <div className="formInput">
            <label>{label}</label>
            <input 
                {...inputProps} 
                onChange={onChange} 
                onBlur={handleFocus} 
                onFocus={() => inputProps.name === "confirmPassword" && setFocused(true) } 
                focused={focused.toString()} 
                className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
            />
            <span>{errorMessage}</span>
        </div>
        </div>
    )
}

export default LoginInput
