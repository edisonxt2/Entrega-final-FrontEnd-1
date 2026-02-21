// 1. DATOS INTEGRADOS (Garantiza que siempre haya algo que mostrar)
const playersData = [
    {
        nombre: "Lionel Messi",
        equipo: "Inter Miami",
        posicion: "Delantero",
        goles: 830,
        asistencias: 361,
        edad: 38,
        nacionalidad: "Argentina",
        foto: "https://piks.eldesmarque.com/bin/2023/10/31/messi_con_su_octavo_balon_de_oro.jpg"
    },
    {
        nombre: "Cristiano Ronaldo",
        equipo: "Al-Nassr",
        posicion: "Delantero",
        goles: 900,
        asistencias: 250,
        edad: 41,
        nacionalidad: "Portugal",
        foto: "https://phantom-marca.unidadeditorial.es/68393693e50669b616462701831c19b6/resize/828/f/jpg/assets/multimedia/imagenes/2024/02/15/17080271701046.jpg"
    },
    {
        nombre: "Kylian Mbappé",
        equipo: "Real Madrid",
        posicion: "Extremo",
        goles: 300,
        asistencias: 120,
        edad: 27,
        nacionalidad: "Francia",
        foto: "https://s.france24.com/media/display/2e086202-211a-11ef-9686-005056bf30b7/w:1280/p:16x9/01_MBAPPE-2.jpg"
    }
];

// 2. FUNCIÓN PARA DIBUJAR LAS TARJETAS
function renderCards(lista) {
    const container = document.getElementById('playerGrid');
    
    // Si el contenedor no existe todavía, nos detenemos para evitar errores
    if (!container) {
        console.error("No se encontró el contenedor #playerGrid");
        return;
    }
    
    container.innerHTML = ''; 

    lista.forEach(p => {
        const card = document.createElement('div');
        card.className = 'card';
        
        // Manejo del click para abrir/cerrar
        card.onclick = function(e) {
            e.preventDefault();
            this.classList.toggle('active');
        };

        card.innerHTML = `
            <img src="${p.foto}" alt="${p.nombre}" onerror="this.src='https://via.placeholder.com/300x320?text=Imagen+No+Disponible'">
            <div class="card-body">
                <span class="position-badge">${p.posicion}</span>
                <h3>${p.nombre}</h3>
                <p>${p.equipo}</p>
            </div>
            <div class="extra-info">
                <div class="stat-row"><strong>Goles:</strong> <span>${p.goles}</span></div>
                <div class="stat-row"><strong>Asistencias:</strong> <span>${p.asistencias}</span></div>
                <div class="stat-row"><strong>Nacionalidad:</strong> <span>${p.nacionalidad}</span></div>
            </div>
        `;
        container.appendChild(card);
    });
}

// 3. ESTO ASEGURA QUE SE EJECUTE CUANDO TODO ESTÉ CARGADO
window.onload = function() {
    console.log("Página cargada. Mostrando jugadores...");
    renderCards(playersData);

    // Lógica del buscador
    const searchInput = document.getElementById('searchInput');
    if(searchInput) {
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            const filtered = playersData.filter(p => 
                p.nombre.toLowerCase().includes(term) || 
                p.equipo.toLowerCase().includes(term)
            );
            renderCards(filtered);
        });

        // Evitar recarga con Enter
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') e.preventDefault();
        });
    }
};