import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { cards, OPCIONES } from '../../data/cards'
import useSelect from '../../Hooks/useSelect'
import { getCardByCategory } from '../helpers/getByCategory'
import Card from './Card'
import Tabla from './Tabla'


const Cards = () => {
    const {category} = useParams()
    const navigate = useNavigate()

    const [vistaCard, setVistaCard] = useState(false)

    const cambioVista = (e) => {
        e.preventDefault()
        setVistaCard(!vistaCard)
    }

    const [categoria, SelectCategoria ] = useSelect('', OPCIONES)
    useEffect(() => {
        if (categoria.length > 1) {
            
            navigate(`/cards/${categoria}`)
        }
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categoria])

    if (category ) {
        const cardsCat = getCardByCategory(category)
        return (
            <div className='container mx-auto flex flex-col items-center'>
                <div className='flex w-full flex-row justify-center'>
                    <SelectCategoria />
                    <div className='ml-1 flex items-end '>
                        <button onClick={cambioVista} className='bg-gray-700 px-2 py-2 rounded-lg text-white hover:bg-gray-600'>
                           { vistaCard ? 'Ver en Cartas' : ' Ver en Lista' }
                        </button>
                    </div>
                </div>
                <div className='container mx-auto flex items-center justify-center flex-wrap '>
                    {
                        vistaCard 
                        ? 
                            <Tabla cards={cardsCat} />
                        : 
                        <div className='flex items-center justify-center flex-wrap'>
                            {
                                cardsCat.map( card => (
                                    <Card key={card.id} id={card.id} titulo={card.titulo} desc={card.desc} img={card.img} category={card.category} />
                                ))
                            }
                        </div>
                    }
                </div>
            </div>
        )
    }
    
    return (
        <div className='container mx-auto flex flex-col items-start'>
            <div className='flex w-full flex-row justify-center'>
                <SelectCategoria />
                <div className='ml-1 flex items-end '>
                    <button onClick={cambioVista}  className='bg-gray-700 px-2 py-2 rounded-lg text-white hover:bg-gray-600'>
                        { vistaCard ? 'Ver en Cartas' : ' Ver en Lista' }
                    </button>
                </div>
            </div>
            {
                vistaCard 
                ? 
                    <Tabla cards={cards} />
                : 
                <div className='flex items-center justify-center flex-wrap'>
                    {
                        cards.map( card => (
                            <Card key={card.id} id={card.id} titulo={card.titulo} desc={card.desc} img={card.img} category={card.category} />
                        ))
                    }
                </div>
            }
        </div>
    )
}

export default Cards
