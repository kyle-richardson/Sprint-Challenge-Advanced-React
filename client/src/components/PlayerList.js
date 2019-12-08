import React from "react"
import Player from "./Player"

const PlayerList = ({playerList}) => {
    return (
        <div className="player-list-container">
            <h2>Top 5 players searched</h2>
            <div className="player-list">
                {playerList.map((player,id)=>{
                    return(
                        <div key={player.id}>
                            {id<5 && <Player player={player} />}
                        </div>
                    )
                })}
            </div>
            
            
        </div> 
    )
}

export default PlayerList