import React, { useState } from "react";
import playersData from "../../data/playersData";
import TeamRoster from "../team/TeamRoster";

function TeamTemplate() {
    const [selectedPlayers, setSelectedPlayers] = useState([]);

    const handlePlayerClick = (player) => {
        const isPlayerSelected = selectedPlayers.some(
        (selectedPlayer) => selectedPlayer.id === player.id
        );

        if (isPlayerSelected) {
        // Des-seleccionar el jugador si ya está seleccionado
        setSelectedPlayers(
            selectedPlayers.filter(
            (selectedPlayer) => selectedPlayer.id !== player.id
            )
        );
        } else {
        // Agregar el jugador  a la lista de seleccionados si no ha alcanzado el máximo de 5 jugadores
        if (selectedPlayers.length < 5) {
            setSelectedPlayers([...selectedPlayers, player]);
        }
        }
    };

    console.log(selectedPlayers);

    return (
        <div>
        <TeamRoster
            players={playersData}
            selectedPlayers={selectedPlayers}
            onPlayerClick={handlePlayerClick}
        />
        </div>
    );
}

export default TeamTemplate;
