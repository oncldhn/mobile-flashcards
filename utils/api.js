import {AsyncStorage} from 'react-native'

export const APP_STORAGE_KEY = 'Udacity:flashcards'


export function getDecks () {
    return AsyncStorage.getItem(APP_STORAGE_KEY)
    .then(response => {
        const results = response == null ? setDummyData() : JSON.parse(response)
        return results
    })
}

export function saveDeckTitle (title) {

}

export function addCardToDeck (title,card) {

}

setDummyData = () => {
    return {
        React: {
          title: 'React',
          questions: [
            {
              question: 'What is React?',
              answer: 'A library for managing user interfaces'
            },
            {
              question: 'Where do you make Ajax requests in React?',
              answer: 'The componentDidMount lifecycle event'
            }
          ]
        },
        JavaScript: {
          title: 'JavaScript',
          questions: [
            {
              question: 'What is a closure?',
              answer: 'The combination of a function and the lexical environment within which that function was declared.'
            }
          ]
        }
      }
}