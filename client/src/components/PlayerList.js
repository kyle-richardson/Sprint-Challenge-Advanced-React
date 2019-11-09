import React from "react"
import Player from "./Player"

const PlayerList = ({playerList}) => {
    return (
        <div className="player-list-container">
            {playerList.map(player=>{
                return(
                    <div>
                        <Player player={player} />
                    </div>
                )
            })}
        </div> 
    )
}

export default PlayerList