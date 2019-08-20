import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { white, black } from '../utils/colors'

class DeckListItem extends Component {
    render () {
        const deck = this.props.deck
        return(
            <TouchableOpacity onPress={() => this.props.onPress(deck)}> 
                <View style={styles.item}>  
                    <Text style={styles.title}>{deck.title}</Text>
                    <Text>Card Count : {deck.questions.length}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    item : {
      flex: 1,
      padding: 20,
      backgroundColor: white,
      borderWidth: 0.5,
      borderColor: black,
      marginBottom: 10,
      alignItems: 'center',
      justifyContent: 'center'
    },
    title: {
      fontSize: 20,
      marginBottom:10   
    }
}) 

export default DeckListItem