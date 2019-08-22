import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList, AsyncStorage} from 'react-native'
import { connect } from 'react-redux'
import { receiveDecks } from '../actions'
import { getDecks } from '../utils/api'
import DeckListItem from './DeckListItem'
import { white } from '../utils/colors'

class DeckList extends Component {

    state = {
        ready: false
    };
     
    componentDidMount () {
        AsyncStorage.clear()
        const { dispatch } = this.props
        getDecks()
        .then((decks) => dispatch(receiveDecks(decks)))
        .then(() => this.setState(() => ({ready: true})))
    }

    onDeckSelected = (deck) => {
        this.props.navigation.navigate('Details', {
            deckTitle:deck.title
        })
    }

    renderItem = ({item}) => {
       return <DeckListItem  deck={item} key={item.title} onPress={this.onDeckSelected}/>
    }

    render () {
        if(this.state.ready) {
            const decks = this.props.decks
            return(
                <View style ={styles.container}>
                    <FlatList style={styles.list}
                        data = {Object.values(decks)}
                        renderItem = {this.renderItem}
                        keyExtractor={(item, index) => item.title}
                    />
                </View>
            )
        } else {
            return (
                <View>
                    <Text>Loading...</Text>
                </View>
            )
        }
        
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: white
    },
    list: {
        paddingTop: 50,
        paddingHorizontal: 20,

    },
    row: {
      flexDirection: 'row',
      flex: 1,
      alignItems: 'center',
    }
})    

function mapStateToProps (decks) {
    return {
        decks
    }
  }

export default connect (mapStateToProps)(DeckList)