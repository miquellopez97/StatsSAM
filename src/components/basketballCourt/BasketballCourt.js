import React from 'react';

function BasketballCourt({ selectedPlayers }) {
  const playerPositions = generatePlayerPositions(selectedPlayers);

  function generatePlayerPositions(selectedPlayers) {
    const positions = [
      { top: '25%', left: '10%' }, // Player 1 (Top-left)
      { top: '25%', left: '70%' }, // Player 2 (Top-right)
      { top: '70%', left: '2%' }, // Player 3 (Bottom-left)
      { top: '70%', left: '40%' }, // Player 4 (Top-center)
      { top: '70%', left: '78%' }, // Player 5 (Bottom-right)
    ];

    // Update the positions based on the selected players
    selectedPlayers.forEach((player, index) => {
      positions[index].player = player;
    });

    return positions;
  }

  return (
    <div
      style={{
        position: 'relative',
        width: '500px',
        height: '400px',
        backgroundImage: "url('https://www.shutterstock.com/image-photo/basketball-half-court-parquet-260nw-122537710.jpg')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        margin: 'auto',
      }}
    >
      {playerPositions.map((position, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            top: position.top,
            left: position.left,
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            overflow: 'hidden',
            boxShadow: '0 0 5px rgba(0, 0, 0, 0.5)',
          }}
        >
          {position.player && (
            <img
              src={position.player.photo}
              alt={`Foto de ${position.player.name}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default BasketballCourt;
