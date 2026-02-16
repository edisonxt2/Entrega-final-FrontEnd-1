const boxCargando = document.getElementById('cargando');
const boxCards = document.getElementById('cards');



const consumoApi = async () => {
    boxCargando.innerHTML = 'Intentando conexión...';
    try {
        const respuesta = await fetch('https://devsapihub.com/api-movies');
        const informacion = await respuesta.json();
        boxCargando.innerHTML = 'Todo ok';
        return informacion;
    } catch (error) {
        boxCargando.innerHTML = 'Error al conectar con la API';
    }
}


const mostrarPeliculas = async () => {
    const datos = await consumoApi();
    console.log(datos);
    boxCargando.innerHTML = '';
    datos.forEach(pelicula => {
        const card = document.createElement('div');
        card.classList.add('cards');
        card.innerHTML = `
            <div class="cards">
                <img src="${pelicula.image_url}" alt="${pelicula.title}">
                <div class="cards__content">
                    <p class="cards__title">${pelicula.title}</p>
                    <p class="genero">Genero: ${pelicula.genre}</p>
                    <p class="cards__description">${pelicula.description}</p>
                    <p class="fecha">Fecha extreno ${pelicula.year}</p>
                </div>
            </div>
        `;
        boxCards.appendChild(card);
    }
    );
}

mostrarPeliculas();
