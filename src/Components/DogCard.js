import React from "react";


// function DogCard(props) {
//   return (
//     <div className="card">
//       <span className="content">
//         <h2 >{props.name}</h2>
//         <img alt={props.breed} src={props.img} />
//       </span>
//       <span className="bark">
//         <button>Bark</button>
//       </span>
//     </div>
//   );
// }
class DogCard extends React.Component {

  constructor() {
    super()
    this.state = {barkClicked: false}
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
          <h2 >{this.props.name}</h2>
          <img alt={this.props.breed} src={this.props.img} />
        </span>
        <span className="bark">
          <button onClick={this.handleClick}>Bark</button>
          
        </span>
      </div>
    );
  }
}
export default DogCard;
