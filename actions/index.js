
export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const CREATE_DECK = 'CREATE_DECK'
export const SAVE_CARD_TO_DECK = 'SAVE_CARD_TO_DECK'


export function receiveDecks (decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  }
}

export function createDeck (title) {
  return {
    type: CREATE_DECK,
    title,
  }
}

export function saveCardToDeck (deckTitle,card) {
    return {
      type: SAVE_CARD_TO_DECK,
      deckTitle,
      card
    }
  }