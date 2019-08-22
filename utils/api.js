import {AsyncStorage} from 'react-native'

export const APP_STORAGE_KEY = 'Udacity:flashcards'


export function getDecks () {
    return AsyncStorage.getItem(APP_STORAGE_KEY)
    .then(response => {
        return JSON.parse(response)
    })
}

export function saveDeckTitle (title) {
   return AsyncStorage.mergeItem(APP_STORAGE_KEY, JSON.stringify({
     [title]: {title:title, questions: []}
   }))
}

export function addCardToDeck (title,card) {
  return AsyncStorage.getItem(APP_STORAGE_KEY).then(response => {
    const decks = JSON.parse(response);
    decks[title] = {
      ...decks[title],
      questions: [
        ...decks[title].questions,
        { question: card.question, answer: card.answer }
      ]
    };
    AsyncStorage.setItem(APP_STORAGE_KEY, JSON.stringify(decks));
  });
}