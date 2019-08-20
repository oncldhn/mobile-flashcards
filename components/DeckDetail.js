import React, { Component } from 'react'
import { View,  Text, StyleSheet, TouchableOpacity } from 'react-native'
import { white, black, purple } from '../utils/colors'
import { connect } from 'react-redux'


class DeckDetail extends Component {
    
    addCard = () => {
        const deck = this.props.deck
        this.props.navigation.navigate('AddCard',{
            deckTitle: deck.title
        })
    }

    startQuiz = () => {

    }

    render () {
        const deck = this.props.deck
        return(
        <View style={styles.item}>  
            <Text style={styles.title}>{deck.title}</Text>
            <Text>{deck.questions.length} Cards</Text>
            <TouchableOpacity 
                    style={styles.submitBtn}
                     onPress={this.addCard}>
                <Text style={styles.submitBtnText}>Add Card</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                    style={styles.submitBtn}
                     onPress={this.startQuiz}>
                <Text style={styles.submitBtnText}>Start Quiz</Text>
            </TouchableOpacity>
        </View>
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
      fontSize: 40,
      marginBottom:10   
    },
    submitBtn: {
        backgroundColor: purple,
        padding: 10,
        borderRadius: 7,
        height: 45,
        margin: 20
      },
    submitBtnText: {
        color: white,
        fontSize: 22,
        textAlign: 'center',
    },
}) 

function mapStateToProps(decks,ownProps){
    return {
        deck: decks[ownProps.navigation.getParam('deckTitle')]
    }
}

export default connect (mapStateToProps)(DeckDetail)