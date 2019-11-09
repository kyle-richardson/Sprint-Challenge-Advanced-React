import React from "react"

const Player = props => {
    return(
        <div className="player-container">
            <p>{props.player.name}</p>
            <p>{props.player.country}</p>
        </div>
    )
}

export default Player