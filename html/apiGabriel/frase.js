async function obtenerFrase() {
    const fraseElement = document.getElementById("frase");
    const autorElement = document.getElementById("autor");
    
    fraseElement.innerText = "Cargando...";
    autorElement.innerText = "";

    try {
        const response = await fetch("https://api.quotable.io/random");
        
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data && data.content && data.author) {
            fraseElement.innerText = `"${data.content}"`;
            autorElement.innerText = `- ${data.author}`;
        } else {
            throw new Error("Datos inválidos de la API");
        }
        
    } catch (error) {
        console.error("Error al obtener frase:", error);
        fraseElement.innerText = "Error al cargar la frase";
        autorElement.innerText = "";
    }
}

obtenerFrase();
document.getElementById("frase2").addEventListener("click", obtenerFrase);