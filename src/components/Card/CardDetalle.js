import { PaperClipIcon } from '@heroicons/react/solid'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { getCardById } from '../helpers/getById'

const CardDetalle = () => {
    const {id} = useParams()
    const card = getCardById(Number(id))
    const {titulo, desc, img, category} = card
    return (
        <div className= 'container mx-auto'>
            <div className='bg-white shadow-md overflow-hidden sm:rounded-lg'>
                <div className='px-4 py-5 sm:px-6'>
                    <h3 className='text-lg leading-6 font-medium text-gray-900'>Información del Anime</h3>
                    <p className='mt-1 max-w-2xl text-sm text-gray-500'>Detalles del anime</p>
                </div>
                <img className='transition-all w-full sm:h-96 object-cover object-top hover:object-fill ' src={img} alt='Imagen'/>
                <div className='border-t border-gray-200'>
                    <dl>
                        <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                            <dt className='text-sm font-medium text-gray-500'>Nombre</dt>
                            <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>{titulo}</dd>
                        </div>
                        <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                            <dt className='text-sm font-medium text-gray-500'>Descripción</dt>
                            <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>{desc}</dd>
                        </div>
                        <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                            <dt className='text-sm font-medium text-gray-500'>Categoria</dt>
                            <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex'>
                            {
                                category.map((item, index) => (
                                    <div className='inline-block mr-3 bg-gray-300 px-2 py-1 rounded-full shadow-md hover:scale-105' key={index}>
                                        <Link to={`/cards/${item}`} className='text-sm font-semibold text-indigo-600 hover:text-indigo-500' >{item} </Link>  
                                    </div>
                                ))
                            }
                            </dd>
                        </div>
                        <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                            <dt className='text-sm font-medium text-gray-500'>Attachments</dt>
                            <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                                <ul className='border border-gray-200 rounded-md divide-y divide-gray-200'>
                                    <li className='pl-3 pr-4 py-3 flex items-end justify-between text-sm'>
                                        <div className='w-0 flex-1 flex items-center'>
                                            <PaperClipIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true"  />
                                            <span className='ml-2 flex-1 w-0 truncate'>resume_back_end_developer.pdf</span>
                                        </div>
                                        <div className='ml-4 flex-shrink-0'>
                                            <a href='#!' className='font-medium text-indigo-600 hover:text-indigo-500'>Download</a>
                                        </div>
                                    </li>
                                </ul>
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    )
}

export default CardDetalle
