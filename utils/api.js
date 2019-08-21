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