import React from "react";
import "../styles/playerStats.css"

const PlayerStats = () => {
    return (
        <div id="playerStats">
            <h1>Kevin Ubilla</h1>
            <div id="playerStats__lines">
                <span id="playerStats__lines__thick"></span>
                <span id="playerStats__lines__thin"></span>
            </div>
            <h2>FullStack Developer</h2>
        </div>
    );
};

export default PlayerStats;