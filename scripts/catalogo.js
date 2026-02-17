const containerCards = document.getElementById('card-container')

const fetchLibros = async () => {
    try {
        const librosRes = await fetch('https://openlibrary.org/search.json?subject=fantasy&limit=15')
        const datosLibros = await librosRes.json();
        return datosLibros;
    } catch (error) {
    }
}

const pintarLibro = async () => {
    const pintarlb = await fetchLibros();
    console.log(pintarlb);
    if (!pintarlb) {

    } else {
        pintarlb.docs.forEach(libro => {
            const card = document.createElement('div');
            card.classList.add('card');
            const imagen = libro.cover_i
                ? `https://covers.openlibrary.org/b/id/${libro.cover_i}.jpg`
                : "https://via.placeholder.com/150x220?text=No+Cover";
            card.innerHTML = `
                <img src="${imagen}" alt="${libro.name}">
                <div class="card__content">
                    <h2>${libro.title}</h2>
                    <p class="card__title">Autor: ${libro.author_name}</p>
                    <p class="card__description">Fecha Publicacion: ${libro.first_publish_year}</p>
                    <p>Lenguajes: ${libro.language}</p>
                </div>
            `
            containerCards.appendChild(card);
        });
    }
}
pintarLibro();