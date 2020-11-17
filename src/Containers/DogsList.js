import React, { Component } from "react";
import DogCard from "../Components/DogCard"
import {apiResponse} from "../api"

class DogsList extends Component {

  state = {
    api: apiResponse
  }

  renderDogs = () => {
    return this.state.api.map(dog => <DogCard dog={dog}/>)
  }

  render() {
    return <div className="list">{this.renderDogs()}</div>;
  }
}

export default DogsList;
