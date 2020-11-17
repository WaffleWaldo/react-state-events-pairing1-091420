import React, { Component } from "react";
import DogCard from "../Components/DogCard"
import {apiResponse} from "../api"

class DogsList extends Component {

  state = {
    api: apiResponse
  }

  renderDogs = () => {
    return this.state.api.map(dog => <DogCard key={dog.id} dog={dog} favClickHandler={this.props.favClickHandler}/>)
  }

  render() {
    return (
      <div className="list">
        <h1 className="container-header">All Dogs</h1>
        <div>{this.renderDogs()}</div>
      </div>
    )
  }
}

export default DogsList;
