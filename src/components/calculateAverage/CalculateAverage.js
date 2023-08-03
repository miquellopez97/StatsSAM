// components/PlayerStatistics.js

import React from 'react';
import './CalculateAverage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function calculateAverage(selectedPlayers) {
    if (selectedPlayers.length === 0) {
        return {
            TCI3: 0,
            TCA3: 0,
            TCI2: 0,
            TCA2: 0,
            TCI1: 0,
            TCA1: 0,
            pointsPerGame: 0,
            OFCR: 0,
            DFCR: 0,
            REB: 0,
            assistsPerGame: 0,
            STL: 0,
            BLK: 0,
            DFL: 0
        };
    }

    return {
        TCI3: selectedPlayers.reduce((total, player) => total + player.stats.TCI3, 0),
        TCA3: selectedPlayers.reduce((total, player) => total + player.stats.TCA3, 0),
        TCI2: selectedPlayers.reduce((total, player) => total + player.stats.TCI2, 0),
        TCA2: selectedPlayers.reduce((total, player) => total + player.stats.TCA2, 0),
        TCI1: selectedPlayers.reduce((total, player) => total + player.stats.TCI1, 0),
        TCA1: selectedPlayers.reduce((total, player) => total + player.stats.TCA1, 0),
        pointsPerGame: selectedPlayers.reduce((total, player) => total + player.stats.PPG, 0),
        OFCR: selectedPlayers.reduce((total, player) => total + player.stats.OFCR, 0),
        DEFR: selectedPlayers.reduce((total, player) => total + player.stats.DEFR, 0),
        REB: selectedPlayers.reduce((total, player) => total + player.stats.OFCR, 0) + selectedPlayers.reduce((total, player) => total + player.stats.DEFR, 0),
        assistsPerGame: selectedPlayers.reduce((total, player) => total + player.stats.AST, 0),
        STL: selectedPlayers.reduce((total, player) => total + player.stats.STL, 0),
        BLK: selectedPlayers.reduce((total, player) => total + player.stats.BLK, 0),
        DFL: selectedPlayers.reduce((total, player) => total + player.stats.DFL, 0)
    };
}

function PlayerStatistics({ selectedPlayers }) {
    const averageStats = calculateAverage(selectedPlayers);

    return (
        <div>
            <h2 style={{ color: "#fff", textAlign: "center" }}>Media de Estadísticas de Jugadores Seleccionados</h2>
            <table className="table table-sm table-dark">
                <thead>
                    <tr>
                        <th rowSpan="2">3 PTS</th>
                        <td>{averageStats.TCA3}/{averageStats.TCI3}</td>
                    </tr>
                    <tr>
                        <td>{selectedPlayers.length === 0 || averageStats.TCI3 === 0 ? 0 : (averageStats.TCA3 / averageStats.TCI3 * 100).toFixed(1)}%</td>
                    </tr>
                    <tr>
                        <th rowSpan="2">2 PTS</th>
                        <td>{averageStats.TCA2}/{averageStats.TCI2}</td>
                    </tr>
                    <tr>
                        <td>{selectedPlayers.length === 0 ? 0 : (averageStats.TCA2 / averageStats.TCI2 * 100).toFixed(1)}%</td>
                    </tr>
                    <tr>
                        <th rowSpan="2">1 PTS</th>
                        <td>{averageStats.TCA1}/{averageStats.TCI1}</td>
                    </tr>
                    <tr>
                        <td>{selectedPlayers.length === 0 ? 0 : (averageStats.TCA1 / averageStats.TCI1 * 100).toFixed(1)}%</td>
                    </tr>
                    <tr>
                        <th>Puntos x Partido</th>
                        <td>{averageStats.pointsPerGame.toFixed(1)}</td>
                    </tr>
                    <tr>
                        <th rowSpan="3">REB x Partido</th>
                        <td>DEF {averageStats.DEFR}</td>
                    </tr>
                    <tr>
                        <td>OFC {averageStats.OFCR}</td>
                    </tr>
                    <tr>
                        <td>Total {averageStats.REB}</td>
                    </tr>
                    <tr>
                        <th>Asistencias x Partido</th>
                        <td>{averageStats.assistsPerGame.toFixed(1)}</td>
                    </tr>
                    <tr>
                        <th>Robos x Partido</th>
                        <td>{averageStats.STL.toFixed(1)}</td>
                    </tr>
                    <tr>
                        <th>Tapones x Partido</th>
                        <td>{averageStats.BLK.toFixed(1)}</td>
                    </tr>
                    <tr>
                        <th>Deflections x Partido</th>
                        <td>{averageStats.DFL.toFixed(1)}</td>
                    </tr>
                </thead>
            </table>
        </div>
    );
}

export default PlayerStatistics;
