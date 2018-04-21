import React, { Component } from 'react';
import './App.css';
import Character from "./Character/Character";
import characters from './characters.json';


//fisher-yates shuffle
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

let message = "Click a beer to drink it! You can only drink the same beer once!!"



class App extends Component {

  state = {
    characters: characters,
    score: 0,
    topScore: 0,
    message: message
  }





  characterClickHandler = (id) => {

    let score = this.state.score;


    let characters = [...this.state.characters];
    const hasBeenClicked = characters.filter(char => char.id === id);

    if (hasBeenClicked[0].beenClicked) {
      characters.forEach(char => {
        char.beenClicked = false;
        // console.log(element);
      });
      // console.log("LOSER");
      message = "HA, HA YOU LOSE! Try Again the beer is on US!!";
      let shuffledCharacters = shuffle(characters);
      this.setState({
        characters: shuffledCharacters,
        score: 0,
        message: message
      });
      // console.log(shuffledCharacters)

    }
    else if (score <= characters.length) {
      score++;
      // console.log(event.target);
      hasBeenClicked[0].beenClicked = true;
      // console.log(characters[event.target.id].beenClicked);
      message = "Keep Guessing!!"
      let shuffledCharacters = shuffle(characters);
      this.setState({
        characters: shuffledCharacters,
        score: score,
        message: message
      });

      // console.log(shuffledCharacters);
      if (score > this.state.topScore) {
        this.setState({
          topScore: score
        })

      }

    }
    if (score === characters.length) {
      message = "Wow, impressive!! After that many beers your memory still works!!"
      characters.forEach(element => {
        element.beenClicked = false;
      });
      let shuffledCharacters = shuffle(characters);
      this.setState({
        characters: shuffledCharacters,
        score: 0
      });
    }
    // console.log('keep clicking!!');
    // console.log(shuffledCharacters);
    // console.log(characters);
  }




  render() {
    console.log(this.state.characters);
    return (

      <div className="App">
        <nav className="App"></nav>
        <h1>Alright Buddy, Let's DRINK UP!!!</h1>
        <h2 className={classnames("currentScore", "col-xs-6", "scoremsg")}>Current Score: {this.state.score}</h2>
        <h2 className={classnames("topScore", "col-xs-6", "scoremsg")}>Top Score: {this.state.topScore}</h2>
        <h3 className={classnames("col-xs-12")}> {message}</h3>
        <div className="beerDiv">
          {this.state.characters.map(char => (
            <Character
              name={char.name}
              photo={char.photo}
              value={char.beenClicked}
              id={char.id}
              key={char.id}
              clicky={this.characterClickHandler}
            />
          ))}
        </div>

      </div>
    );
  }
}

export default App;
