document.addEventListener('DOMContentLoaded', function(e){
    debugger;
    e.preventDefault();
    mostrarBienvenida();
    mostrarLibros();
    const usuarioLogueado = JSON.parse(localStorage.getItem('usuarioLogueado'));
    console.log(usuarioLogueado.nombre);
    
    if (!usuarioLogueado) {
        window.location.href = '/templates/login.html';
    }else{
        history.replaceState(null, null, '/templates/home.html');
    }
})


function mostrarBienvenida(){
    const nombreUser = JSON.parse(localStorage.getItem('usuarioLogueado'))
    if(nombreUser){
        const mensaje = `Hola de nuevo, ${nombreUser.nombre}`;
        document.getElementById('mensaje').textContent = mensaje;    
    }
}

let libros = [
    {
        url: 'https://www.turnerlibros.com/wp-content/uploads/2021/02/ejemplo.pdf',
        titulo: 'libro 1',
        descripcion: 'Este es el libro 1 conoceras algo fino',
        img: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Nicol%C3%A1s_Maduro_in_2023_%28cropped%29.jpg'
    }
];


  function mostrarLibros(){
    const contenedor = document.getElementById('contenedorLibro');
    libros.forEach(libro => {
        const col = document.createElement('div');
        col.className = 'col-md-4';

        col.innerHTML = `
            <div class="card mb-4">
                <img src="${libro.img}" class="card-img-top" alt="${libro.titulo}">
                <div class="card-body">
                    <h5 class="card-title">${libro.titulo}</h5>
                    <p class="card-text">${libro.descripcion}</p>
                    <button href="${libro.url}" class="btn btn-primary" download="libro1.pdf">Descargar</button>
                </div>
            </div>
        `;

        contenedor.appendChild(col);
    });
}



function confirmLogout(event) {
    event.preventDefault();
    const confirmation = confirm("¿Estás seguro de que deseas cerrar sesión?");
    if (confirmation) {
        localStorage.removeItem('usuarioLogueado');
        window.location.href = "../templates/login.html";
    }
}

