import React, { useState } from "react";
import playersData from "../../data/PlayersData";
import TeamRoster from "../teamRoster/TeamRoster";
import BasketballCourt from "../basketballCourt/BasketballCourt";
import CalculateAverage from "../calculateAverage/CalculateAverage";

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
            } else {
                // Si ya se alcanzó el máximo de jugadores, reemplaza el primer jugador seleccionado con el nuevo jugador seleccionado
                setSelectedPlayers([...selectedPlayers.slice(1), player]);
            }
        }
    };

    return (
        <div style={{ display: "flex" }}>
            <div style={{ flex: 1 }}>
                <TeamRoster
                    players={playersData}
                    selectedPlayers={selectedPlayers}
                    onPlayerClick={handlePlayerClick}
                />
                <BasketballCourt selectedPlayers={selectedPlayers} />
            </div>
            <div style={{ flex: 1 }}>
                <CalculateAverage selectedPlayers={selectedPlayers} />
            </div>
        </div>
    );
}

export default TeamTemplate;
