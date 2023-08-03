// data/playersData.js
const playersData = [
    { id: 0, name: 'Roger', subname: 'Alonso', position: 'Base', height: 1.85, weight: 80, age: 18, photo: 'https://s3-eu-west-1.amazonaws.com/playofffederacions/basquet/FED_FOTO/Thumbs/PER_0b268bcf0-83ed-43ae-847a-8e168efcbcde.jpg', 
        stats: { TCI3: 32, TCA3: 6, TCI2: 38, TCA2: 16, TCI1: 15, TCA1: 4, OFCR: 1, DEFR: 1, AST:1, STL: 1, BLK: 1, DFL: 1, min: 379, PJ: 26} },
    { id: 1, name: 'David', subname: 'Casas', position: 'Escolta', height: 1.85, weight: 80, age: 18, photo: 'https://s3-eu-west-1.amazonaws.com/playofffederacions/basquet/FED_FOTO/Thumbs/PER_0e4569e5d-4d38-49cc-aab8-a65644033dbf.png',
        stats: { TCI3: 49, TCA3: 15, TCI2: 95, TCA2: 37, TCI1: 35, TCA1: 25, OFCR: 1, DEFR: 1, AST:1, STL: 1, BLK: 1, DFL: 1, min: 500, PJ: 26} },
    { id: 3, name: 'Roger', subname: 'Rossello', position: 'Ala-pivot', height: 1.85, weight: 80, age: 18, photo: 'https://s3-eu-west-1.amazonaws.com/playofffederacions/basquet/FED_FOTO/Thumbs/PER_0e3a98edb-6864-40fb-a449-ccdbc54b4b07.jpg',
        stats: { TCI3: 31, TCA3: 12, TCI2: 71, TCA2: 34, TCI1: 18, TCA1: 8, OFCR: 1, DEFR: 1, AST:1, STL: 1, BLK: 1, DFL: 1, min: 320, PJ: 15} },
    { id: 7, name: 'Xavier', subname: 'Serra', position: 'Base', height: 1.85, weight: 80, age: 18, photo: 'https://s3-eu-west-1.amazonaws.com/playofffederacions/basquet/FED_FOTO/Thumbs/PER_076dbcfb8-ae3b-4135-bb00-379e5850de40.jpg',
        stats: { TCI3: 58, TCA3: 14, TCI2: 49, TCA2: 24, TCI1: 27, TCA1: 19, OFCR: 1, DEFR: 1, AST:1, STL: 1, BLK: 1, DFL: 1, min: 461, PJ: 20} },
    { id: 8, name: 'Ivan', subname: 'Torres', position: 'Escolta', height: 1.85, weight: 80, age: 18, photo: 'https://s3-eu-west-1.amazonaws.com/playofffederacions/basquet/FED_FOTO/Thumbs/PER_06df4233e-96fd-43e6-8b9f-ecf89929066f.png',
        stats: { TCI3: 73, TCA3: 15, TCI2: 154, TCA2: 72, TCI1: 72, TCA1: 38, OFCR: 1, DEFR: 1, AST:1, STL: 1, BLK: 1, DFL: 1, min: 562, PJ: 24} },
    { id: 10, name: 'Pau', subname: 'Garcia', position: 'Ala-pivot', height: 1.85, weight: 80, age: 18, photo: 'https://s3-eu-west-1.amazonaws.com/playofffederacions/basquet/FED_FOTO/Thumbs/PER_096ba3b6d-2f4c-4cf5-849b-80e588186191.jpg',
        stats: { TCI3: 5, TCA3: 1, TCI2: 109, TCA2: 47, TCI1: 61, TCA1: 42, OFCR: 1, DEFR: 1, AST:1, STL: 1, BLK: 1, DFL: 1, min: 396, PJ: 18} },
    { id: 11, name: 'Daniel', subname: 'Gonzalez', position: 'Pivot', height: 1.85, weight: 80, age: 18, photo: 'https://s3-eu-west-1.amazonaws.com/playofffederacions/basquet/FED_FOTO/Thumbs/PER_0d15b9783-85ea-49d7-accf-6cafd547ccea.jpg',
        stats: { TCI3: 0, TCA3: 0, TCI2: 36, TCA2: 16, TCI1: 21, TCA1: 12, OFCR: 1, DEFR: 1, AST:1, STL: 1, BLK: 1, DFL: 1, min: 191, PJ: 20} },
    { id: 13, name: 'Daniel', subname: 'Gonzalez', position: 'Base', height: 1.85, weight: 80, age: 18, photo: 'https://s3-eu-west-1.amazonaws.com/playofffederacions/basquet/FED_FOTO/Thumbs/PER_041f1e16a-fa32-4368-9648-a9d598626b3c.jpg',
        stats: { TCI3: 46, TCA3: 8, TCI2: 86, TCA2: 32, TCI1: 52, TCA1: 35, OFCR: 1, DEFR: 1, AST:1, STL: 1, BLK: 1, DFL: 1, min: 604, PJ: 26} },
    { id: 15, name: 'Samuel', subname: 'Ariza', position: 'Aler', height: 1.85, weight: 80, age: 18, photo: 'https://s3-eu-west-1.amazonaws.com/playofffederacions/basquet/FED_FOTO/Thumbs/PER_0f9b7de0d-9749-4867-83e9-435a0b80c67b.png',
        stats: { TCI3: 81, TCA3: 29, TCI2: 164, TCA2: 100, TCI1: 187, TCA1: 152, OFCR: 1, DEFR: 1, AST:1, STL: 1, BLK: 1, DFL: 1, min: 799, PJ: 24} },
    { id: 22, name: 'Victor ', subname: 'Camiruaga', position: 'Escolta', height: 1.85, weight: 80, age: 18, photo: 'https://s3-eu-west-1.amazonaws.com/playofffederacions/basquet/FED_FOTO/Thumbs/PER_032ad3454-2ce0-4749-bb07-a5cef54b7a14.png',
        stats: { TCI3: 86, TCA3: 20, TCI2: 154, TCA2: 60, TCI1: 102, TCA1: 59, OFCR: 1, DEFR: 1, AST:1, STL: 1, BLK: 1, DFL: 1, min: 799, PJ: 24} }    
];

// Función para calcular la estadística PPG (Puntos por Partido)
function calculatePPG(player) {
    return ((player.stats.TCA3 * 3) + (player.stats.TCA2 * 2) + player.stats.TCA1) / player.stats.PJ;
}

// Función para calcular la estadística MPG 
function calculateMPG(player) {
    return player.stats.min / player.stats.PJ;
}

// Función para calcular la estadística REB totales
function totalReb(player) {
    return player.stats.OFCR / player.stats.DEFR;
}

  // Calcular la estadística PPG para cada jugador y agregarla al array playersData
playersData.forEach((player) => {
    player.stats.PPG = calculatePPG(player);
    player.stats.MPG = calculateMPG(player);
    player.stats.REB = totalReb(player);
});

export default playersData;
