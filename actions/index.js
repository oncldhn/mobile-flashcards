export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const SAVE_DECK = 'SAVE_DECK'
export const SAVE_CARD_TO_DECK = 'SAVE_CARD_TO_DECK'


export function receiveDecks (decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  }
}

export function saveDeck (deck) {
  return {
    type: SAVE_DECK,
    deck,
  }
}

export function saveCardToDeck (deckTitle,card) {
    return {
      type: SAVE_CARD_TO_DECK,
      deckTitle,
      card
    }
  }