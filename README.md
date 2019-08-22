# Mobile Flashcards Project

Application start with yarn install and yarn add commands.


#Environment
I've tested the application on an iphone Xs device. Installed the expo app from the store and to open the app just scan the qr code published on http://localhost:19003/


#State
Redux is used for state management.

#Persistent Data
As given with the project info page. I've used the same data structure for storage.

{
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
