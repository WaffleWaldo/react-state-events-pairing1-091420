import React from "react";

class DogCard extends React.Component {

  state = {
    barkClicked: false
  }

  // handleClick = () => {
  //   this.setState(previousState => {
  //     return {
  //       barkClicked: !previousState.barkClicked
  //     }
  //   })
  // }

  dogFavClickHandler = () => {
    this.props.favClickHandler(this.props.dog)
  }


  render() {
    return (
      <div className="card">
        <span className="content">
          <h2 >{this.props.dog.name}</h2>
          <img alt={this.props.dog.breed} src={this.props.dog.img} />
        </span>
        {this.props.isFavorited ? null : ( 
          <span className="bark">
            <button onClick={this.dogFavClickHandler}>Favorite</button>
          </span>)}
      </div>
    );
  }
}
export default DogCard;
