import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as request from 'superagent';
import { connect } from 'react-redux';

export class Game1 extends Component {

  render() {
    
    const correctBreed = this.props.dogRandomImage.breed
    const { randomBreeds } = this.props
    const checkAnswer = this.props.checkAnswer
    const showRightName = this.props.showRightName
    //console.log('MIAAUW',showRightName)
   
    return (
      <div>
        <h1>What is the breed of the image below?</h1>
        <h1>{showRightName}</h1>
                  
          <br />
          <img src={this.props.dogRandomImage.url} alt="random"></img>   

        <div>
          <input onClick={checkAnswer} type="radio" id="correct" name={correctBreed} value="Option A" />
          <label >{correctBreed}</label>
        </div>

        <div>
          <input onClick={checkAnswer} type="radio" id="false" name={randomBreeds && randomBreeds[0]} value="Option B" />
          <label>{randomBreeds && randomBreeds[0]}</label>
        </div>

        <div>
          <input onClick={checkAnswer} type="radio" id="false" name={randomBreeds && randomBreeds[1]} value="Option C" />
          <label >{randomBreeds && randomBreeds[1]}</label>
        </div>
        <br />

        
        {/* <button onClick={this.checkAnswer}>Answer Question!</button> */}
        {/* ^^^ Should dispatch an action or call a function dispatching an action*/}
        
        <br/>
        <Link to="/">Go back to the index</Link>
      </div>
      
      )
    }
}

const mapStateToProps = (state) => {
  return {
    answers: state.answers
  }
}

export default connect(mapStateToProps)(Game1)