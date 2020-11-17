import React from "react";

class DogCard extends React.Component {

  state = {
    barkClicked: false
  }

  handleClick = () => {
    this.setState(previousState => {
      return {
        barkClicked: !previousState.barkClicked
      }
    })
  }

  render() {
    return (
      <div className="card">
        <span className="content">
          <h2 >{this.props.dog.name}</h2>
          <img alt={this.props.dog.breed} src={this.props.dog.img} />
        </span>
        <span className="bark">
          <button onClick={this.handleClick}>Bark</button>
          {this.state.barkClicked ? (<h2>Bark</h2>) : null}
        </span>
      </div>
    );
  }
}
export default DogCard;
