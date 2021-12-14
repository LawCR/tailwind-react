import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LoginInput from './LoginInput'
import './Form.scss'
const Registro = () => {

    // states para almacenar los valores del form registro
    const [values, setValues] = useState({
        username: "",
        email: "",
        birthday: "",
        password: "",
        confirmPassword: ""
    })

    // Data de inputs a mapear para este form registro
    const inputs = [
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "Username",
            errorMessage: "El usuario debe contener entre 3-16 caracteres y no debe incluir ningún caracter especial.",
            label: "Usuario",
            pattern: "^[A-Za-z0-9]{3,16}$", 
            required: true
        },
        {
            id: 3,
            name: "birthday",
            type: "date",
            placeholder: "Birthday",
            label: "Fecha de nacimiento"
        },
        {
            id: 2,
            name: "email",
            type: "email",
            placeholder: "Email",
            errorMessage: "Debe ser un email válido.",
            label: "Email",
            required: true
        },
        {
            id: 4,
            name: "password",
            type: "password",
            placeholder: "Password",
            errorMessage: "Password debe ser de 8-20 caracteres e incluir al menos un número, una letra, y un caracter especial.",
            label: "Password",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true
            
        },
        {
            id: 5,
            name: "confirmPassword",
            type: "password",
            placeholder: "Confirmar Password",
            errorMessage: "Los passwords no coinciden.",
            label: "Confirmar Password",
            pattern: values.password,
            required: true
        },
    ]

    // Función submit al hacer click en el boton
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    // onChange para leer la data ingresada
    const onChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit} className='form'>
                <h1 className='form__h1 text-indigo-600'>Crear Cuenta</h1>
                {
                    inputs.map((input) => (
                        <LoginInput 
                            key={input.id }
                            {...input}
                            value={ values[input.name] }
                            onChange={onChange}
                        />
                    ))
                }
                <Link 
                    className="form__link" 
                    to="/login"
                >¿Ya tienes una cuenta?</Link>
                <button className='group relative w-full flex justify-center py-2 my-4 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>Registrar</button>
            </form>
        </div>
    )
}

export default Registro
