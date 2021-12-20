import React from 'react'
import { Link } from 'react-router-dom'

const NoMatch = () => {
    return (
        <div className='container mx-auto flex justify-center items-center'>
            <div className='bg-white w-full h-screen sm:rounded-lg sm:w-1/2 sm:h-48 flex flex-col justify-center items-center'>
                <h3 className='font-medium text-lg'>Nada que ver aqui!</h3>
                <p className='text-sm text-indigo-700 hover:text-indigo-500'>
                    <Link to="/">Volver a la pagina principal</Link>
                </p>
            </div>
        </div>
    )
}

export default NoMatch
