import React, { Component } from 'react'
import { TouchableOpacity, Text, StyleSheet ,View  } from 'react-native'
import { red, white, black, green, purple } from '../utils/colors'
import { connect } from 'react-redux'

class Quiz extends Component {

    state = {
        questionIndex: 0,
        score:0,
        showAnswer:false
    }
    handleCorrect = () => {
        this.setState((state) => ({
            score: state.score+1 ,
            questionIndex:state.questionIndex+1
        }))
    }

    handleIncorrect = () => {
        this.setState((state) => ({
            questionIndex:state.questionIndex+1 
        }))
    }

    showAnswer = () => {
        this.setState((state) => ({
            showAnswer:!state.showAnswer
        }))
    }

    restartQuiz = () => {
        this.setState({
            questionIndex:0,
            score:0,
            showAnswer:0
        })
    }

    backToDeck = () => {
        this.props.navigation.goBack()
    }

    render () {
        const question = this.props.questions[this.state.questionIndex]
        //all questions answered
        if(this.state.questionIndex === this.props.questions.length) {
            return (
                <View style={styles.item}>
                   <Text style={styles.title}>Quiz is over</Text>
                   <Text>Your Score :{this.state.score}</Text>
                   <TouchableOpacity
                        style={styles.defaultBtn}
                        onPress={this.restartQuiz}>
                    <Text style={styles.btnText}>Restart</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.defaultBtn}
                        onPress={this.backToDeck}>
                        <Text style={styles.btnText}>Back To Deck</Text>
                    </TouchableOpacity>
                </View>
            )
        }else {
            return (
                <View style={styles.item}>
                    <Text>Questions left :{this.props.questions.length-this.state.questionIndex-1}</Text>
                    <Text style={styles.score}>Score :{this.state.score}</Text>
                    {this.state.showAnswer ?  
                    <Text style={styles.cardText}>{question.answer}</Text>
                    : <Text style={styles.cardText}>{question.question}</Text>}
                    <TouchableOpacity
                        onPress={this.showAnswer}>
                    <Text>{this.state.showAnswer ? 'Show Question' : 'Show Answer'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.correctBtn}
                        onPress={this.handleCorrect}>
                    <Text style={styles.btnText}>Correct</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.incorrectBtn}
                        onPress={this.handleIncorrect}>
                        <Text style={styles.btnText}>Incorrect</Text>
                    </TouchableOpacity>
                </View>
            )
        }
    }

}

function mapStateToProps(decks,ownProps){
    return {
        questions: decks[ownProps.navigation.getParam('deckTitle')].questions
    }
}

const styles = StyleSheet.create({
    item : {
      flex: 1,
      backgroundColor: white,
      borderWidth: 0.5,
      borderColor: black,
      alignItems: 'center',
    },
    cardText: {
      fontSize: 40,
      marginBottom:10   
    },
    correctBtn: {
        backgroundColor: green,
        padding: 10,
        borderRadius: 7,
        height: 45,
        margin: 20,
        marginTop: 100  
    },
    incorrectBtn: {
        backgroundColor: red,
        padding: 10,
        borderRadius: 7,
        height: 45,
        margin: 20
      },
    defaultBtn: {
        backgroundColor: purple,
        padding: 10,
        borderRadius: 7,
        height: 45,
        margin: 20
      },  
    btnText: {
        color: white,
        fontSize: 22,
        textAlign: 'center',
        width: 200
    },
    score: {
        marginBottom:80,
        fontSize: 20 ,
    },
    title: {
        fontSize: 40,
        marginBottom:50,
        marginTop:50
    },
}) 

export default connect (mapStateToProps) (Quiz)