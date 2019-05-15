import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as request from 'superagent';

export default class Game1 extends Component {

  checkAnswer = (event) => {
    if (event.target.name === this.props.dogRandomImage.breed){  
      console.log("ANSWER WAS TRUE!")
      const correct = {
        type: 'ANSWERS',
        payload: true
      }
      //this.props.dispatch(correct)
      return true
    }

    console.log("ANSWER WAS FALSE!")
    const wrong = {
      type: 'ANSWERS',
      payload: false
    }
    //this.props.dispatch(wrong)
    return false
  }

  render() {
    const correctBreed = this.props.dogRandomImage.breed
    const { randomBreeds } = this.props
    
    return (
      <div>
        <h1>What is the breed of the image below?</h1>
                  
          <br />
          <img src={this.props.dogRandomImage.url} alt="random"></img>   

        <div>
          <input onClick={this.checkAnswer} type="radio" id="correct" name={correctBreed} value="Option A" />
          <label for="Option A">{correctBreed}</label>
        </div>

        <div>
          <input onClick={this.checkAnswer} type="radio" id="false" name={randomBreeds && randomBreeds[0]} value="Option B" />
          <label for="Option B">{randomBreeds && randomBreeds[0]}</label>
        </div>

        <div>
          <input  type="radio" id="false" name={randomBreeds && randomBreeds[1]} value="Option C" />
          <label for="Option C">{randomBreeds && randomBreeds[1]}</label>
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

