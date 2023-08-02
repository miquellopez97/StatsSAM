// components/TeamRoster.js

import React from 'react';

function TeamRoster({ players, selectedPlayers, onPlayerClick }) {
    const isSelected = (player) => selectedPlayers.some((selectedPlayer) => selectedPlayer.id === player.id);

    const renderPlayerRow = (players) => {
        return (
        <div style={{ display: 'flex' }}>
            {players.map((player) => (
            <div
                key={player.id}
                onClick={() => onPlayerClick(player)}
                style={{
                cursor: 'pointer',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '5px',
                borderRadius: '5px',
                padding: '5px',
                boxShadow: isSelected(player) ? '0 0 5px rgba(0, 0, 0, 0.5)' : 'none',
                }}
            >
                <img
                src={player.photo}
                alt={`Foto de ${player.name}`}
                style={{
                    width: '50px',
                    height: '50px',
                    objectFit: 'cover',
                    borderRadius: '50%',
                    border: isSelected(player) ? '2px solid #333' : 'none',
                }}
                />
            </div>
            ))}
        </div>
        );
    };

    const playerRows = [];
    for (let i = 0; i < players.length; i += 3) {
        const row = players.slice(i, i + 3);
        playerRows.push(renderPlayerRow(row));
    }

    return (
        <div style={{ width: '50%', margin: 'auto' }}>
        <h2>Equipo</h2>
        {playerRows}
        </div>
    );
}

export default TeamRoster;
