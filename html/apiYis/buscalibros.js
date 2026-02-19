const resultado = document.getElementById("resultado");
const btnBuscar = document.getElementById("btnBuscar");
const inputBusqueda = document.getElementById("inputBusqueda");

btnBuscar.addEventListener("click", async () => {
    const query = inputBusqueda.value.trim();
    if (!query) {
        resultado.innerHTML = "<p class='error'>Por favor escribe algo para buscar.</p>";
        return;
    }

    resultado.innerHTML = "<p class='loading'>Cargando...</p>";

    try {
        // API de Open Library: búsqueda por título/autor
        const respuesta = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`);

        if (!respuesta.ok) {
            throw new Error("Error en la solicitud: " + respuesta.status);
        }

        const datos = await respuesta.json();

        resultado.innerHTML = "";

        if (datos.docs.length === 0) {
            resultado.innerHTML = "<p>No se encontraron resultados.</p>";
            return;
        }

        // Mostrar los primeros 10 resultados
        datos.docs.slice(0, 10).forEach(libro => {
            const div = document.createElement("div");
            div.classList.add("book");
            div.innerHTML = `
        <strong>${libro.title}</strong><br>
        Autor(es): ${libro.author_name ? libro.author_name.join(", ") : "Desconocido"}<br>
        Año: ${libro.first_publish_year || "N/A"}
      `;
            resultado.appendChild(div);
        });

    } catch (error) {
        resultado.innerHTML = "<p class='error'>No se pudieron cargar los datos. Intenta más tarde.</p>";
        console.error(error);
    }
});