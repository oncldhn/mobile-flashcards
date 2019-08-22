import React from 'react'
import { StyleSheet } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer  from './reducers'
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation'
import DeckList from './components/DeckList'
import AddDeck from './components/AddDeck'
import DeckDetail from './components/DeckDetail'
import AddCard from './components/AddCard'
import Quiz from './components/Quiz'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { white, purple } from './utils/colors'
import { setLocalNotification } from './utils/helpers'

let AddDeckStack = createStackNavigator({
  Add: AddDeck,
  Details: DeckDetail,
  AddCard:AddCard,
  StartQuiz:Quiz
},{
  defaultNavigationOptions: {
    headerStyle: {
    },
  },
  navigationOptions: {
      headerTitle: 'Home!',
  },
}
);

AddDeckStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
  };
};

let DeckListStack = createStackNavigator({
  List: DeckList,
  Details: DeckDetail,
  AddCard:AddCard,
  StartQuiz:Quiz
},{
  defaultNavigationOptions: {
    headerStyle: {
    },
  },
  navigationOptions: {
    headerTitle: 'Home!',
  },
});

DeckListStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
  };
};

let TabNavigator = createBottomTabNavigator({
  DeckList: {
    screen: DeckListStack,
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


export default class App extends React.Component{
  componentDidMount() {
    setLocalNotification()
  }
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <Navigation/>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
