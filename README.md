# Mobile Flashcards Project

Application start with yarn install and yarn add commands.

There is a warning for notifications when the app starts. Scheduled notification is listed as a must in project rubric so i've ignored the warning

"Ability to schedule an automatically repeated notification is deprecated on iOS and will be removed in the next SDK release."


#Environment
I've tested the application on an iphone Xs device. 
- Installed the expo app from app store
- open the app just scan the qr code published on http://localhost:19003/


#State
Redux is used for state management.

#Persistent Data
As given with the project info page. I've used the same data structure for storage.

Deck : {
    title: Deck,
    questions :[]
}



Example:

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
