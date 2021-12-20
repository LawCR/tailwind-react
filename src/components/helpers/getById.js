import { cards } from "../../data/cards"

export const getCardById = (id = '') => {
    return cards.find( card => card.id === id)
}