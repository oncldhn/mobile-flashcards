import React from 'react'
import { StyleSheet, Text, View} from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer  from './reducers'
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation'
import DeckList from './components/DeckList'
import AddDeck from './components/AddDeck'
import DeckDetail from './components/DeckDetail'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { white, purple } from './utils/colors'

let AddDeckStack = createStackNavigator({
  Add: AddDeck,
  Details: DeckDetail,
});

let TabNavigator = createBottomTabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
    },
  },
  AddDeck: {
    screen: AddDeckStack,
    navigationOptions: {
      tabBarLabel: 'Add Deck',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
    },
  },
}, {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor:purple ,
    style: {
      height: 56,
      backgroundColor: white,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
})

let Navigation =  createAppContainer(TabNavigator);


export default function App() {
  return (
    <Provider store={createStore(reducer)}>
      <Navigation/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
