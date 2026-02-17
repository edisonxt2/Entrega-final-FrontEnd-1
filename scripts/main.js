const containerCards = document.getElementById('card-container')
const containerCardsAut = document.getElementById('cards-container')


const fetchLibros = async () => {
    try {
        const librosRes = await fetch('https://openlibrary.org/search.json?subject=fantasy&limit=16')
        const datosLibros = await librosRes.json();
        return datosLibros;
    } catch (error) {
    }
}

const fetchBuscar = async (nomLibro) => {
    try {
        const buscarL = await fetch(`https://openlibrary.org/search.json?q= ${encodeURIComponent(nomLibro)}`)
        const datosBl = await buscarL.json();
        // console.log(datosBl)
        return datosBl
    } catch (error) {
    }
}


const pintarLibro = async () => {
    const pintarlb = await fetchLibros();
    if (!pintarlb) {

    } else {
        pintarlb.docs.slice(0, 4).forEach(libro => {
            const card = document.createElement('div');
            card.classList.add('card');
            const imagen = libro.cover_i
                ? `https://covers.openlibrary.org/b/id/${libro.cover_i}.jpg`
                : "https://via.placeholder.com/150x220?text=No+Cover";
            card.innerHTML = `
                <img src="${imagen}" class="card-img-top" alt="...">
                <div class="card-body card1">
                    <h5 class="card-title">${libro.title}</h5>
                    <p class="card-text"></p>
                </div>
            `
            containerCards.appendChild(card);
        });
    }

}


pintarLibro();
