import React from 'react'
import 'animate.css';
import { Link } from 'react-router-dom'

const Card = ({id, titulo, desc, img, category}) => {
    return (
        <div className='max-w-sm h bg-gray-900 rounded-md overflow-hidden shadow-lg mr-0 sm:mr-3 mt-3 animate__animated animate__fadeIn'>
            {/* Imagen Card */}
            <img className='w-full' src={img} alt='Imagen'/>
            {/* Body Card*/}
            <div className='px-6 py-3'>
                <div className='font-bold text-xl text-white mb-2'>{titulo}</div>
                <p className='text-base text-gray-400'>{desc}</p>
            </div>
            {/* Footer Card */}
            <div className='px-6 py-3'>
                {
                    category.map( (item, index) => (
                        <Categorias key={index} category={item} index={index} />
                    ))
                }
            </div>
            {/* Boton */}
            <div className='h-10 flex items-center justify-center px-6 my-3'>
                <Link to={`/card/${id}`} className='bg-blue-500 w-3/4 hover:bg-blue-600 text-white text-center font-bold py-2 px-4 rounded-lg transition duration-500 ease'>
                    Ver
                </Link>
            </div>
        </div>
        
    )
}

export default Card

const Categorias = ({category, index}) => {
    return (
        // <span className='inline-block bg-gray-200 hover:bg-gray-300 hover:scale-y-105 rounded-full px-3 py-1 text-sm font-semibold text-gray-500 hover:text-gray-600 cursor-pointer mr-2  '>
        //     #{category}
        // </span>
        <div className='inline-block mr-2 mt-1 sm:mt-0 bg-gray-200 px-2 py-1 rounded-full shadow-md hover:scale-105 cursor-pointer' key={index}>
            <Link to={`/cards/${category}`} className='text-sm font-semibold text-indigo-600 hover:text-indigo-500' >#{category} </Link>  
        </div>
    )
}
