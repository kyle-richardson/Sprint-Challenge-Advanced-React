import React from "react"
import Player from "./Player"

const PlayerList = ({playerList}) => {
    return (
        <div className="player-list-container">
            {playerList.map((player,id)=>{
                return(
                    <div key={player.id}>
                        {id<5 && <Player player={player} />}
                    </div>
                )
            })}
            
        </div> 
    )
}

export default PlayerList