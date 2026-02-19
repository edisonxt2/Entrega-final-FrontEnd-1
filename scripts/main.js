const containerCards = document.getElementById('card-container')

//Esta es la función que llama hace la conexión a la api, devuelve la respuesta y luego si tenemos conexión y todo está ok, pasa la respuesta recibida a tipo json...
const fetchLibros = async () => {
    try {
        const librosRes = await fetch('https://openlibrary.org/search.json?subject=fantasy&limit=16')
        const datosLibros = await librosRes.json();
        return datosLibros;
    } catch (error) {
    }
}

//Esta es la función que toma los datos que trajimos de la función de arriba, y lo que hace es que pinta esos datos accediendo al objeto que queremos traer en una card; para pintarlos en una card lo que hice fue lo que el profe nos mostró en claso, creamos un div y le agregamos una clase, luego de eso ponemos la estructura del html en el forech(que este es el que se encarga de recorrer cada objeto y por cierto el slice que esta antes del forech es solo para limitar la cantidad de iteracciones que hace el bucle for). Finalmente cuando hace la creación de esa estructura lo agregamos como hijo al contenedor padre que está en el HTML y que capturamos arriba en una constante...
const pintarLibro = async () => {
    const pintarlb = await fetchLibros();
    if (!pintarlb) {

    } else {
        pintarlb.docs.slice(0, 3).forEach(libro => {
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
