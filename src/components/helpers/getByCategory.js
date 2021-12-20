import { cards } from "../../data/cards"



export const getCardByCategory = ( categoria ) => {
    const validCategory = ['accion', 'poderes', 'shonen', 'aventura', 'comedia', 'romance']
    if (!validCategory.includes(categoria)) {
        throw new Error( `${categoria} no es una categoria valida`)
    }

    return cards.filter( card => card.category.includes(categoria))
}