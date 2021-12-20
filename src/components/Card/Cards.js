import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { cards } from '../../data/cards'
import useSelect from '../../Hooks/useSelect'
import { getCardByCategory } from '../helpers/getByCategory'
import Card from './Card'


const Cards = () => {
    const {category} = useParams()
    const navigate = useNavigate()

    const OPCIONES = [
        {value: 'shonen', label: 'Shonen'},
        {value: 'poderes', label: 'Poderes'},
        {value: 'accion', label: 'Acción'},
        {value: 'aventura', label: 'Aventura'},
        {value: 'comedia', label: 'Comedia'},
        {value: 'romance', label: 'Romance'},
    ]

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
                <SelectCategoria />
                <div className='container mx-auto flex items-center justify-center flex-wrap '>
                    {
                        cardsCat.map( card => (
                            <Card key={card.id} id={card.id} titulo={card.titulo} desc={card.desc} img={card.img} category={card.category} />
                        ))
                    }
                </div>
            </div>
        )
    }
    
    return (
        <div className='container mx-auto flex flex-col items-center'>
            <SelectCategoria />
            <div className='flex items-center justify-center flex-wrap'>
                {
                    cards.map( card => (
                        <Card key={card.id} id={card.id} titulo={card.titulo} desc={card.desc} img={card.img} category={card.category} />
                    ))
                }
            </div>
        </div>
    )
}

export default Cards
