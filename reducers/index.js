import { RECEIVE_DECKS, SAVE_DECK, SAVE_CARD_TO_DECK } from '../actions'

function decks (state = null, action) {
  switch (action.type) {
    case RECEIVE_DECKS :
        return {
            ...state,
            ...action.decks,
        }
    case SAVE_DECK :
        return {
            ...state,
            ...action.deck
        }
    case SAVE_CARD_TO_DECK :
        return {
          ...state,
          [action.deckTitle] :{
              ...state[action.deckTitle],
              cards : [
                  ...state[action.deckTitle].cards,
                  action.card
              ]
          }
        }  
    default :
      return state
  }
}

export default decks