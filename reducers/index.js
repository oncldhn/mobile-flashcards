import { RECEIVE_DECKS, CREATE_DECK, SAVE_CARD_TO_DECK } from '../actions'

function decks (state = null, action) {
  switch (action.type) {
    case RECEIVE_DECKS :
        return {
            ...state,
            ...action.decks,
        }
    case CREATE_DECK :
        return {
            ...state,
            [action.title] : {
                title: action.title,
                questions : []
            }
        }
    case SAVE_CARD_TO_DECK :
        return {
          ...state,
          [action.deckTitle] :{
              ...state[action.deckTitle],
              questions : [
                  ...state[action.deckTitle].questions,
                  action.questions
              ]
          }
        }  
    default :
      return state
  }
}

export default decks