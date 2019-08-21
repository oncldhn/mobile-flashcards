import React, { Component } from 'react'
import { TouchableOpacity, Text, StyleSheet , KeyboardAvoidingView, TextInput, Alert } from 'react-native'
import { purple, white } from '../utils/colors'
import { connect } from 'react-redux'
import { createDeck } from '../actions'
import { saveDeckTitle } from '../utils/api'

class AddDeck extends Component {
    static navigationOptions = {
        headerTitle: 'Add Deck'
    };

    state = {
        input:''
    }

    addDeck = () => {
        const deckTitle = this.state.input
        if(this.props.decks[deckTitle]){
            Alert.alert('Error','A deck already exists with that name')
            return
        }
        this.props.dispatch(createDeck(deckTitle))
        saveDeckTitle(deckTitle)
        this.setState({
            input:''
        })
        this.props.navigation.navigate('Details',{
            deckTitle:deckTitle
        })
    }

    handleTextChange = (value) => {
        this.setState(() => {
            value
        })
    }

    render () {
        return(
            <KeyboardAvoidingView style={styles.container} behavior='padding'>
                <Text style={styles.header}>What is the title of your new deck?</Text>
                <TextInput
                    value={this.state.input}
                    onChangeText={(input) => this.setState({input})}
                    style={styles.input}
                    editable = {true}
                />
                <TouchableOpacity 
                    style={styles.submitBtn}
                     onPress={this.addDeck}
                     disabled={this.state.input===''}>
                      <Text style={styles.submitBtnText}>SUBMIT</Text>
                 </TouchableOpacity>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        fontSize: 15,
        textAlign: 'center'
    },
    input: {
        width: 300,
        height: 30,
        borderColor: 'gray', 
        borderWidth: 1,
        margin: 20
    },
    submitBtn: {
        backgroundColor: purple,
        padding: 10,
        borderRadius: 7,
        height: 45,
        marginLeft: 40,
        marginRight: 40,
      },
    submitBtnText: {
        color: white,
        fontSize: 22,
        textAlign: 'center',
    },
})

function mapStateToProps(decks) {
    return {
        decks
    }
}

export default connect (mapStateToProps) (AddDeck)