
const jugadores = document.getElementById('searchInput')
const cargando = document.getElementById('boxCargando')
const maincard = document.getElementById('playerGrid')


const conexion = async () => {
    const captJugadores = jugadores.value;
    try {
        const conexionD = await fetch(`https://www.thesportsdb.com/api/v1/json/123/searchplayers.php?p=${captJugadores}`)
        const transDt= await conexionD.json();
        cargando.innerHTML = 'Cargando Jugadores'
        return transDt;
    }catch(error) {
        cargando.innerHTML = 'Error de conexión'
    }

}

const pintarJugadores = async () => {
    const datosConexion = await conexion();
    cargando.innerHTML = ''
    maincard.innerHTML = ''
    datosConexion.player.forEach(p => {
        const cargar = document.createElement('div');
        cargar.className = 'card'
        cargar.innerHTML = `
            <img src="${p.strThumb}" alt="${p.strPlayer}" onerror="this.src='https://via.placeholder.com/300x320?text=Imagen+No+Disponible'">
            <div class="card-body">
                <span class="position-badge">${p.strPosition}</span>
                <h3>${p.strPlayer}</h3>
                <p>${p.strTeam}</p>
            </div>
            <div class="extra-info">
                <div class="stat-row"><strong>Nacionalidad:</strong> <span>${p.strNationality}</span></div>
            </div>
        `
        maincard.appendChild(cargar);
    });
}

jugadores.addEventListener('keydown',(e)=> {
        if (e.key === 'Enter') {
        e.preventDefault();
        pintarJugadores();
    }
})

