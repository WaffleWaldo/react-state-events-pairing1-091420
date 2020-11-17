import React, { Component } from "react";
import DogCard from '../Components/DogCard.js'


class FavoritesList extends Component {

    renderFavDogs = () => {
        return this.props.favs.map(dog => <DogCard key={dog.id} dog={dog} isFavorited={true}/>)
    }

    render() {
        return (
            <div>
                <h1 className="container-header">Fav Dogs</h1>
                <div>{this.renderFavDogs()}</div>
            </div>
        )
    }

}

export default FavoritesList