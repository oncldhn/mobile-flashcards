import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Platform, FlatList,AsyncStorage } from 'react-native'
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
        AsyncStorage.clear();
        const { dispatch } = this.props
        getDecks()
        .then((decks) => dispatch(receiveDecks(decks)))
        .then(() => this.setState(() => ({ready: true})))
    }

    renderItem = ({item}) => {
       return <DeckListItem  deck={item} key={item.title}/>
    }

    render () {
        if(this.state.ready) {
            const decks = this.props.decks
            return(
                <View style ={styles.container}>
                    <FlatList
                        data = {Object.values(decks)}
                        renderItem = {this.renderItem}
                        keyExtractor={(item, index) => item.title}
                    />
                </View>
            )
        } else {
            return (
                <View>
                    <Text>Loading</Text>
                </View>
            )
        }
        
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: white
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