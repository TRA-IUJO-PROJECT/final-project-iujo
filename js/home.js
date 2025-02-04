document.addEventListener('DOMContentLoaded', function(e){
    debugger;
    e.preventDefault();
    mostrarBienvenida();
    mostrarLibros();
    const usuarioLogueado = JSON.parse(localStorage.getItem('usuarioLogueado'));
    
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
        url: '../assets/pdf/Padre-Rico-Padre-Pobre.pdf',
        titulo: 'Padre rico padre pobre',
        descripcion: '"Padre Rico, Padre Pobre" de Robert Kiyosaki es un libro sobre educación financiera. Compara las lecciones sobre el dinero de dos figuras paternas: su propio padre (padre pobre) y el padre de su mejor amigo (padre rico). El libro destaca la importancia de adquirir activos que generen ingresos pasivos, invertir sabiamente y tener una mentalidad empresarial para alcanzar la libertad financiera.',
        img: '../assets/img/imagen-1.jpg'
    },

    {
        url: '../assets/pdf/La_culpa_es_de_la_vaca.pdf',
        titulo: 'La culpa es de la  vaca',
        descripcion: '"La culpa es de la vaca" es una recopilación de cuentos y reflexiones de diferentes autores, editada por Jaime Lopera y Marta Inés Bernal. El libro presenta historias inspiradoras y motivadoras que resaltan valores como la responsabilidad, la solidaridad y la superación personal. A través de anécdotas y relatos, busca transmitir lecciones de vida y fomentar el crecimiento personal y profesional.',
        img: '../assets/img/imagen-2.jpg'
    },
    {
        url: '../assets/pdf/kamasutra-diversual.pdf',
        titulo: 'kamasutra',
        descripcion: 'El "Kamasutra" es un antiguo texto hindú sobre el arte del amor y la sexualidad, atribuido a Vatsyayana. Además de posiciones sexuales, abarca el cortejo, el matrimonio y el comportamiento social, promoviendo relaciones armoniosas y respetuosas.',
        img: '../assets/img/imagen-3.jpg'
    },
    {
        url: '../assets/pdf/Odisea.pdf',
        titulo: 'La odisea',
        descripcion: 'conoce mas sobre nuestro libro',
        img: '../assets/img/imagen-4.jpg'
    },
    {
        url: '../assets/pdf/El camino de las lágrimas.pdf',
        titulo: 'el camino de las lagrimas',
        descripcion: 'conoce mas sobre nuestro libro',
        img: '../assets/img/imagen-5.jpg'
    },
    {
        url: '../assets/pdf/corazon.pdf',
        titulo: 'Corazon',
        descripcion: 'Este es el libro 7 conoceras algo fino',
        img: '../assets/img/imagen-6.jpg'
    },
    {
        url: '../assets/pdf/3 cuentos.pdf',
        titulo: '3 cuentos de las mil y una noches',
        descripcion: 'Este es el libro 8 conoceras algo fino',
        img: '../assets/img/imagen-7.jpg'
    },
    {
        url: '../assets/pdf/10 cuentos.pdf',
        titulo: 'las mil y una noches en 10 cuentos',
        descripcion: 'Este es el libro 9 conoceras algo fino',
        img: '../assets/img/imagen-8.jpg'
    },
    {
        url: '../assets/pdf/caballeria roja.pdf',
        titulo: 'La caballleria roja',
        descripcion: 'Este es el libro 10 conoceras algo fino',
        img: '../assets/img/imagen-9.jpg'
    },

    {
        url: '../assets/pdf/alberto.pdf',
        titulo: 'Albert Salvarus',
        descripcion: 'Este es el libro 11 conoceras algo fino',
        img: '../assets/img/imagen-10.jpg'
    },

    {
        url: '../assets/pdf/el asesinato.pdf',
        titulo: 'Un asesinato',
        descripcion: 'Este es el libro 12 conoceras algo fino',
        img: '../assets/img/imagen-11.jpg'
    },

    {
        url: '../assets/pdf/el jardin de los.pdf',
        titulo: 'El jardin de cerezos',
        descripcion: 'Este es el libro 13 conoceras algo fino',
        img: '../assets/img/imagen-12.jpg'
    },

    {
        url: '../assets/pdf/el pabellon.pdf',
        titulo: 'El pabellon 6',
        descripcion: 'Este es el libro 14 conoceras algo fino',
        img: '../assets/img/imagen-13.jpg'
    },

    {
        url: '../assets/pdf/el misterio de copper.pdf',
        titulo: 'El misterio de copper beeches',
        descripcion: 'Este es el libro 15 conoceras algo fino',
        img: '../assets/img/imagen-14.jpg'
    },

    {
        url: '../assets/pdf/el misterio del valle.pdf',
        titulo: 'El misterio del valle boscombe',
        descripcion: 'Este es el libro 16 conoceras algo fino',
        img: '../assets/img/imagen-15.jpg'
    },

    {
        url: '../assets/pdf/el signo de los 4.pdf',
        titulo: 'el signo de los 4',
        descripcion: 'Este es el libro 17 conoceras algo fino',
        img: '../assets/img/imagen-16.jpg'
    },

    {
        url: '../assets/pdf/la teoria de la evolucion.pdf',
        titulo: 'el origen de las especies',
        descripcion: 'Este es el libro 18 conoceras algo fino',
        img: '../assets/img/imagen-17.jpg'
    },

    {
        url: '../assets/pdf/espanto en las alturas.pdf',
        titulo: 'espanto en las alturas',
        descripcion: 'Este es el libro 19 conoceras algo fino',
        img: '../assets/img/imagen-18.jpg'
    },

    {
        url: '../assets/pdf/tartarin.pdf',
        titulo: 'tartarin de tarascon',
        descripcion: 'Este es el libro 20 conoceras algo fino',
        img: '../assets/img/imagen-19.jpg'
    },

    {
        url: '../assets/pdf/proceso por asesinato.pdf',
        titulo: 'proceso de un asesinato',
        descripcion: 'Este es el libro 21 conoceras algo fino',
        img: '../assets/img/imagen-20.jpg'
    },

    {
        url: '../assets/pdf/noches blancas.pdf',
        titulo: 'noches blancas',
        descripcion: 'Este es el libro 22 conoceras algo fino',
        img: '../assets/img/imagen22.jpg'
    },

    {
        url: '../assets/pdf/Reliquia.pdf',
        titulo: 'Reliquia',
        descripcion: 'Este es el libro 23 conoceras algo fino',
        img: '../assets/img/imagen23.jpg'
    },

    {
        url: '../assets/pdf/Anillo.pdf',
        titulo: 'El anillo',
        descripcion: 'Este es el libro 24 conoceras algo fino',
        img: '../assets/img/imagen24.jpg'
    },

    {
        url: '../assets/pdf/Iliada.pdf',
        titulo: 'la iliada',
        descripcion: 'Este es el libro 25 conoceras algo fino',
        img: '../assets/img/imagen25.jpg'
    },

    {
        url: '../assets/pdf/Bug_Jargal-Victor_Hugo.pdf',
        titulo: 'Bug Jargal',
        descripcion: 'Este es el libro 26 conoceras algo fino',
        img: '../assets/img/imagen26.jpg'
    },

    {
        url: '../assets/pdf/Dracula_Stoker.pdf',
        titulo: 'dracula',
        descripcion: 'Este es el libro 27 conoceras algo fino',
        img: '../assets/img/imagen27.jpg'
    },

    {
        url: '../assets/pdf/Casa_del_juez-Stoker.pdf',
        titulo: 'La casa del juez',
        descripcion: 'Este es el libro 28 conoceras algo fino',
        img: '../assets/img/imagen28.jpg'
    },

    {
        url: '../assets/pdf/Jardinero.pdf',
        titulo: 'El jardinero',
        descripcion: 'Este es el libro 29 conoceras algo fino',
        img: '../assets/img/imagen29.jpg'
    },

    {
        url: '../assets/pdf/Elfos.pdf',
        titulo: 'los Elfos',
        descripcion: 'Este es el libro 30 conoceras algo fino',
        img: '../assets/img/imagen30.jpg'
    },

    {
        url: '../assets/pdf/OrigenMal.pdf',
        titulo: 'El origen del mal',
        descripcion: 'Este es el libro 31 conoceras algo fino',
        img: '../assets/img/imagen31.jpg'
    },

    {
        url: '../assets/pdf/MuerteIvanIlich.pdf',
        titulo: 'La muerte de Ivan ilich',
        descripcion: 'Este es el libro  conoceras algo fino',
        img: '../assets/img/imagen32.jpg'
    },

    {
        url: '../assets/pdf/DemetrioRudin.pdf',
        titulo: 'Demetrio Rudin',
        descripcion: 'Este es el libro 33 conoceras algo fino',
        img: '../assets/img/imagen33.jpg'
    },

    {
        url: '../assets/pdf/DeTierraLuna.pdf',
        titulo: 'De la tierra a luna',
        descripcion: 'Este es el libro 34 conoceras algo fino',
        img: '../assets/img/imagen34.jpg'
    },

    {
        url: '../assets/pdf/El_castillo_de_los_Carpatos-Julio_Verne.pdf',
        titulo: 'El castillo de los carpatos',
        descripcion: 'Este es el libro 35 conoceras algo fino',
        img: '../assets/img/imagen35.jpg'
    },

    {
        url: '../assets/pdf/ElEternoAdan.pdf',
        titulo: 'El eterno Adan',
        descripcion: 'Este es el libro 36 conoceras algo fino',
        img: '../assets/img/imagen36.jpg'
    },

    {
        url: '../assets/pdf/Candido_Voltaire.pdf',
        titulo: 'Candido',
        descripcion: 'Este es el libro 37 conoceras algo fino',
        img: '../assets/img/imagen37.jpg'
    },

    {
        url: '../assets/pdf/MaravillosoCuento.pdf',
        titulo: 'Un maravilloso cuento',
        descripcion: 'Este es el libro 38 conoceras algo fino',
        img: '../assets/img/imagen38.jpg'
    },

    {
        url: '../assets/pdf/El_fantasma_de_Canterville-Oscar_Wilde.pdf',
        titulo: 'El fantasma de canterville',
        descripcion: 'Este es el libro 39 conoceras algo fino',
        img: '../assets/img/imagen39.jpg'
    },

    {
        url: '../assets/pdf/Una partida de ajedrez.pdf',
        titulo: 'una partida de ajedrez',
        descripcion: 'Este es el libro 40 conoceras algo fino',
        img: '../assets/img/imagen40.jpg'
    },

    {
        url: '../assets/pdf/Elcolorsurgidodelespacio.pdf',
        titulo: 'El color del espacio',
        descripcion: 'Este es el libro 41 conoceras algo fino',
        img: '../assets/img/imagen41.jpg'
    },



];


const abrirPDF = (url, target = '_blank') => {
    const link = document.createElement('a');
    
    link.href = url;
    link.target = target;
    link.dispatchEvent(new MouseEvent('click'));
};

  function mostrarLibros(){
    const contenedor = document.getElementById('contenedorLibro');
    contenedor.innerHTML = '';

    libros.forEach(libro => {
        const col = document.createElement('div');
        col.className = 'col-md-4';

        col.innerHTML = `
            <div class="card mb-4">
                <img src="${libro.img}" class="card-img-top" alt="${libro.titulo}">
                <div class="card-body">
                    <h5 class="card-title">${libro.titulo}</h5>
                    <p class="card-text">${libro.descripcion}</p>
                    <button class="btn btn-primary" onclick="abrirPDF('${libro.url}')" target="_blank">Leer más</button>
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

