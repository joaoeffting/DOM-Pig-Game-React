import React from 'react';

const Player = ({score, current, active, nome, winner}) => {
    let panelClass = "player-panel";
    if (winner) panelClass += " winner"
    else if (active) panelClass += " active";
    return (
        <div className={panelClass}>
            <div className="player-name">{nome}</div>
            <div className="player-score">{score}</div>
            <div className="player-current-box">
                <div className="player-current-label">Current</div>
                <div className="player-current-score">{current}</div>
            </div>
        </div>
    );
};

export default Player;