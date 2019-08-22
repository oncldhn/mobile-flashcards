import React, { Component } from 'react'
import { TouchableOpacity, Text, StyleSheet , KeyboardAvoidingView, TextInput } from 'react-native'
import { purple, white } from '../utils/colors'
import { connect } from 'react-redux'
import { addCardToDeck } from '../utils/api'
import { saveCardToDeck} from '../actions/index'

class AddCard extends Component {

    static navigationOptions = {
        headerTitle: 'Add Card'
    };

    state = {
        question:'',
        answer:''
    }

    addCard = () => {
        const {question, answer} = this.state
        const dispatch = this.props.dispatch
        const deckTitle = this.props.navigation.getParam('deckTitle', 'Deck Detail')
        console.log(question, answer)
        dispatch(saveCardToDeck(deckTitle,{question,answer}))
        addCardToDeck(deckTitle,{question,answer})
        this.props.navigation.goBack()
    }
    

    render () {
        return(
            <KeyboardAvoidingView style={styles.container} behavior='padding'>
                <Text style={styles.header}>Question</Text>
                <TextInput
                    value={this.state.input}
                    onChangeText={(input) => this.setState({question:input})}
                    style={styles.input}
                    editable = {true}
                />
                <Text style={styles.header}>Answer</Text>
                <TextInput
                    value={this.state.input}
                    onChangeText={(input) => this.setState({answer:input})}
                    style={styles.input}
                    editable = {true}
                />
                <TouchableOpacity 
                    style={styles.submitBtn}
                     onPress={this.addCard}
                     disabled={this.state.question==='' || this.state.answer==='' }>
                    <Text style={styles.submitBtnText}>ADD CARD</Text>
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

export default connect () (AddCard)