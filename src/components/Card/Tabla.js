import React from 'react'
import { Link } from 'react-router-dom'

const Tabla = ({cards}) => {
    return (
        <div className='container mx-auto flex flex-col mt-3'>
            <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8' >
                <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
                    <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
                        <table className='min-w-full divide-y divide-gray-200'>
                            <thead className='bg-gray-600'>
                                <tr>
                                    <th
                                        className='px-6 py-3 text-left text-xs font-medium text-gray-100 uppercase tracking-wider'
                                    >Nombre</th>
                                    <th
                                        className='px-6 py-3 text-left text-xs font-medium text-gray-100 uppercase tracking-wider'
                                    >Descripción</th>
                                    <th
                                        className='px-6 py-3 text-left text-xs font-medium text-gray-100 uppercase tracking-wider'
                                    >Status</th>
                                    <th
                                        className='px-6 py-3 text-left text-xs font-medium text-gray-100 uppercase tracking-wider'
                                    >Categoria</th>
                                    <th className='relative px-6 py-3'>
                                        <span className='sr-only'>Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className='bg-white divide-y divide-gray-200'>
                                {
                                    cards.map( card => (
                                        <tr key={card.id}>
                                            <td className='px-6 py-4 whitespace-nowrap'>
                                                <div className='flex items-center'>
                                                    <div className='flex-shrink-0 h-10 w-10'>
                                                        <img className='h-10 w-10 rounded-full' src={card.img} alt={card.titulo} />
                                                    </div>
                                                    <div className='ml-4'>
                                                        <div className='text-sm font-medium text-gray-900'>{card.titulo} </div>
                                                        <div className='text-sm text-gray-500'>Temporada 1</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className='px-6 py-4 whitespace-nowrap'>
                                                <div className='text-sm text-gray-900'>{card.desc}</div>
                                                <div className='text-sm text-gray-400'>Anime</div>
                                            </td>
                                            <td className='px-6 py-4 whitespace-nowrap'>
                                                <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>
                                                    Active
                                                </span>
                                            </td>
                                            <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                                                {card.category.map(item => (
                                                    `${item} `
                                                ))}
                                            </td>
                                            <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
                                                <Link to={`/card/${card.id}`} className='text-indigo-500 hover:text-indigo-800'>Ver</Link>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Tabla
