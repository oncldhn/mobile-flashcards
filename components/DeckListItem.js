import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Platform } from 'react-native'
import { white } from '../utils/colors'

class DeckListItem extends Component {
    render () {
        const deck = this.props.deck
        return(
            <View style={styles.container}>  
                <Text>{deck.title} Question count : {deck.questions.length}</Text>
            </View>
        )
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

export default DeckListItem