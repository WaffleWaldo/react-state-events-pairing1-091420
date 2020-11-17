import React, { Component } from "react";
import "./App.css";
import DogsList from './Containers/DogsList'
import FavoritesList from './Containers/FavoritesList'

class App extends Component {

  state = {
    favDogs: []
  }


  favClickHandler = (dog) => {
    this.setState(prevState => {
      const match = prevState.favDogs.find(favDog => favDog.id === dog.id)
      return match ? prevState : {favDogs: [...prevState.favDogs, dog]}
    })
  }

  render() {
    return (
      <div className="app">
        <DogsList favClickHandler={this.favClickHandler} />
        <FavoritesList favs={this.state.favDogs} />
      </div>
    );
  }
}

export default App;
