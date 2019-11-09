import React from "react"

const Player = props => {
    return(
        <div className="player-container">
            <p>Name: {props.player.name}</p>
            <p>Country: {props.player.country}</p>
            <p>Searched: {props.player.searches}</p>
        </div>
    )
}

export default Player