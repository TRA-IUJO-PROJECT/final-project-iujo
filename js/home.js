document.addEventListener('DOMContentLoaded', function(e){
    debugger;
    e.preventDefault();
    mostrarBienvenida();
    mostrarLibros();
    const usuarioLogueado = JSON.parse(localStorage.getItem('usuarioLogueado'));
    
    if (!usuarioLogueado) {
        window.location.href = '/templates/login.html';        
        history.replaceState(null, null, '/templates/login.html');

    }else{
        history.replaceState(null, null, '/templates/home.html');
    }
})


function mostrarBienvenida(){
    const nombreUser = JSON.parse(localStorage.getItem('usuarioLogueado'))
    if(nombreUser){
        const mensaje = `Hola de nuevo, ${nombreUser.nombre} ${nombreUser.apellido}`;
        document.getElementById('mensaje').textContent = mensaje;    
    }
}

function mostrarLibros(){

    debugger;

    const libros = JSON.parse(localStorage.getItem('libros'))

    const contenedor = document.getElementById('contenedorLibro');
    contenedor.innerHTML = '';

    libros.forEach((libro, index) => {
        const col = document.createElement('div');
        col.className = 'col-md-4';

        col.innerHTML = `
        <div class="card mb-4">
            <img src="${libro.img}" class="card-img-top" alt="${libro.titulo}">
            <div class="card-body">
                <h5 class="card-title">${libro.nombre}</h5>
                <p class="card-text">${libro.descripcion}</p>
                <button class="btn btn-primary" onclick="abrirPDF('${libro.url}')" target="_blank">Leer más</button>
                <button class="btn btn-secondary" onclick="toggleComentarios(${index})">Ver más</button>
                
                <div id="comentarios-${index}" style="display: none;">
                    <h6>Comentarios:</h6>
                    <ul id="lista-comentarios-${index}"></ul>
                    <input type="text" id="comentario-input-${index}" placeholder="Escribe un comentario" />
                    <button class="btn btn-success" onclick="agregarComentario(${index})">Agregar Comentario</button>
                </div>
            </div>
            <button class="btn btn-danger" onclick="eliminarLibro(${index})">Eliminar</button>
        </div>
    `;

        contenedor.appendChild(col);
    });
}

function toggleComentarios(index) {
    debugger;
    const comentariosDiv = document.getElementById(`comentarios-${index}`);
    comentariosDiv.style.display = comentariosDiv.style.display === 'none' ? 'block' : 'none';
}

function agregarComentario(index) {
    debugger;
    const comentarioInput = document.getElementById(`comentario-input-${index}`);
    const listaComentarios = document.getElementById(`lista-comentarios-${index}`);

    const nuevoComentario = comentarioInput.value.trim();

    if (nuevoComentario) {
        const li = document.createElement('li');
        li.textContent = nuevoComentario;
        listaComentarios.appendChild(li);
        comentarioInput.value = '';
    } else {
        alert('Por favor, escribe un comentario');
    }
}

function deleteBtn(index){
    const libros = JSON.parse(localStorage.getItem('libros'))
    
    libros.splice(index, 1)

    localStorage.setItem('libros', JSON.stringify(libros));

    mostrarLibros();
    
    
}

function namePdf(){
    const input = document.getElementById('pdfInput');
    const fileNameDisplay = document.getElementById('fileName');

    if (input.files.length > 0) {
        fileNameDisplay.textContent = input.files[0].name;
    }
}


function nameImg(){
    debugger;
    const inputImg = document.getElementById('imgInput');
    const fileNameDisplay = document.getElementById('imgName');

    if (inputImg.files.length > 0) {
        fileNameDisplay.textContent = inputImg.files[0].name;
    }
}

  function cargarLibros(){

    debugger;

    const input = document.getElementById('pdfInput');
    const file = input.files[0];

    const inputImg = document.getElementById('imgInput');
    const fileImg = inputImg.files[0];

    if(!file || !fileImg){
        alert(`Por favor, complete los campos`)
        return  
    }

    const pdfUrl = URL.createObjectURL(file);
    const imgUrl = URL.createObjectURL(fileImg);


    const name = document.getElementById('nameBook').value;
    const author = document.getElementById('authorBook').value;
    const description = document.getElementById('descriptionBook').value;

    if(name == "" || author == "" || description == ""){
        alert(`Por favor, complete los campos`)
        return
    }    

    const objLibros = {
        nombre: name,
        autor: author,
        descripcion: description,
        url: pdfUrl,
        img: imgUrl
    }

    const libros = JSON.parse(localStorage.getItem('libros')) || [];

    libros.push(objLibros);

    localStorage.setItem('libros', JSON.stringify(libros))
    borrarCampos();
    mostrarLibros();
}

const abrirPDF = (url, target = '_blank') => {
    const link = document.createElement('a');
    
    link.href = url;
    link.target = target;
    link.dispatchEvent(new MouseEvent('click'));
};

function borrarCampos() {
    const name = document.getElementById('nameBook').value = "";
    const author = document.getElementById('authorBook').value = "";
    const description = document.getElementById('descriptionBook').value = "";
}


function confirmLogout(event) {
    event.preventDefault();
    const confirmation = confirm("¿Estás seguro de que deseas cerrar sesión?");
    if (confirmation) {
        localStorage.removeItem('usuarioLogueado');
        window.location.href = "../templates/login.html";
    }
}

