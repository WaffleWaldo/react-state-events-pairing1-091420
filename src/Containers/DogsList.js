import React, { Component } from "react";
import DogCard from "../Components/DogCard"
import apiResponse from "../api"

// console.log(apiResponse.apiResponse[0])
// console.log(typeof apiResponse)

// const api = apiResponse

// console.log(api.map(dog => dog.name))



// renderApi()

class DogsList extends Component {
  
  renderApi = () => {
    return apiResponse.apiResponse.map(dog => <DogCard name={dog.name} img={dog.img} key={dog.id} breed={dog.breed} />)
  }

  render() {
    return <div className="list">{this.renderApi()}</div>;
  }
}

export default DogsList;
