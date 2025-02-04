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
        url: '../assets/pdf/',
        titulo: 'noches blancas',
        descripcion: 'Este es el libro 22 conoceras algo fino',
        img: '../assets/img/'
    },

    {
        url: 'https://drive.google.com/file/d/1ioNBeB2R1TbwLPS5A4nbXqpFvCV3snS-/view',
        titulo: 'libro 23',
        descripcion: 'Este es el libro 23 conoceras algo fino',
        img: 'https://m.media-amazon.com/images/I/61ZovwpTBxL._AC_UF894,1000_QL80_.jpg'
    },

    {
        url: 'https://drive.google.com/file/d/1MC9Cs2-wsFUc5ssfK3SL4NeQr9ZM8-9b/view',
        titulo: 'libro 24',
        descripcion: 'Este es el libro 24 conoceras algo fino',
        img: 'https://m.media-amazon.com/images/I/71jwYRu29RL._UF1000,1000_QL80_.jpg'
    },

    {
        url: 'https://drive.google.com/file/d/1aS1dF6HyZvFfhVvV6dCVHCkoIXpyPZHH/view',
        titulo: 'libro 25',
        descripcion: 'Este es el libro 25 conoceras algo fino',
        img: 'https://editorialverbum.es/wp-content/uploads/2020/07/La-Iliada.jpg'
    },

    {
        url: 'https://drive.google.com/file/d/10rmaLi6DDuj1RWl5Jy9GV5U8B2Ws-ZCK/view',
        titulo: 'libro 26',
        descripcion: 'Este es el libro 26 conoceras algo fino',
        img: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Bug-Jargal_%281881%29_%28cover%29.jpg'
    },

    {
        url: 'https://drive.google.com/file/d/1EfdxZG1aq2ew9UB2coUJ-1Xt7VVNE4Oo/view',
        titulo: 'libro 27',
        descripcion: 'Este es el libro 27 conoceras algo fino',
        img: 'https://http2.mlstatic.com/D_NQ_NP_804342-MLV76520695042_052024-O.webp'
    },

    {
        url: 'https://drive.google.com/file/d/1-phpMbKQLhMuUbcm1CLO96JVdS8lIuMp/view',
        titulo: 'libro 28',
        descripcion: 'Este es el libro 28 conoceras algo fino',
        img: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1422968570i/24816119.jpg'
    },

    {
        url: 'https://drive.google.com/file/d/1_rBkIloYIwECwFVRVg7NJOXp3scWb9eo/view',
        titulo: 'libro 29',
        descripcion: 'Este es el libro 29 conoceras algo fino',
        img: 'https://cdn.prod.website-files.com/6034d7d1f3e0f52c50b2adee/625453050e7891f12d61d21e_6034d7d1f3e0f5f391b2b21b_El-jardinero-r-tagore-editorial-alma.jpeg'
    },

    {
        url: 'https://drive.google.com/file/d/1vovEtc_cPE7UMH_sv5Ci_ZD6fF7gXRyh/view',
        titulo: 'libro 30',
        descripcion: 'Este es el libro 30 conoceras algo fino',
        img: 'https://cdn.kobo.com/book-images/c655b796-647c-473c-9ac4-c5b7e40fbcd5/1200/1200/False/los-elfos-2.jpg'
    },

    {
        url: 'https://drive.google.com/file/d/1KUV3aO5iY1Ar-bGZ8p_W71Pit0M7eGzs/view',
        titulo: 'libro 31',
        descripcion: 'Este es el libro 31 conoceras algo fino',
        img: 'https://www.elejandria.com/covers/El_origen_del_mal-Tolstoi_Leon-lg.png'
    },

    {
        url: 'https://drive.google.com/file/d/1EB3u4Vg-TlNvruXolwap6l4QrdqNiRNr/view',
        titulo: 'libro 32',
        descripcion: 'Este es el libro  conoceras algo fino',
        img: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1682110599i/136140018.jpg'
    },

    {
        url: 'https://drive.google.com/file/d/1U2zTW9pLG5P9rBY3-qW9zUTPa4LPuncV/view',
        titulo: 'libro 33',
        descripcion: 'Este es el libro 33 conoceras algo fino',
        img: 'https://elemblob.blob.core.windows.net/media/demetrio-rudin5aa1d3b26da23_300h.jpg'
    },

    {
        url: 'https://drive.google.com/file/d/1QFno5G8ifvLQpHd5US5EEE-r5raTNE-F/view',
        titulo: 'libro 34',
        descripcion: 'Este es el libro 34 conoceras algo fino',
        img: 'https://www.planetadelibros.com/usuaris/libros/fotos/300/original/portada_de-la-tierra-a-la-luna_julio-verne_201907171323.jpg'
    },

    {
        url: 'https://drive.google.com/file/d/1hpsVZ_3SBETwyJS3TBKWHNEUXyJmKX1V/view',
        titulo: 'libro 35 ',
        descripcion: 'Este es el libro 35 conoceras algo fino',
        img: 'https://www.alianzaeditorial.es/imagenes/libros/grande/9788491817710-el-castillo-de-los-carpatos.jpg'
    },

    {
        url: 'https://drive.google.com/file/d/1832u4EvX_mUWUXsSQzIDNfa-LosVLpm7/view',
        titulo: 'libro 36',
        descripcion: 'Este es el libro 36 conoceras algo fino',
        img: 'https://humildelector.com/wp-content/uploads/2021/01/el-eterno-adan-julio-verne.jpg?w=250'
    },

    {
        url: 'https://drive.google.com/file/d/1iw_fg3loRHZozeJv9yo0NTZq2gx3bado/view',
        titulo: 'libro 37',
        descripcion: 'Este es el libro 37 conoceras algo fino',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Candide1759.jpg/1200px-Candide1759.jpg'
    },

    {
        url: 'https://drive.google.com/file/d/1SdMCkgX1SkK0qhosBJX8MPzZOtnBOXIr/view',
        titulo: 'libro 38',
        descripcion: 'Este es el libro 38 conoceras algo fino',
        img: 'https://m.media-amazon.com/images/I/81phy+qV+CL._UF1000,1000_QL80_.jpg'
    },

    {
        url: 'https://drive.google.com/file/d/19b5TvslCEKkCjxr_vqYTBPAWXi_bg0cO/view',
        titulo: 'libro 39',
        descripcion: 'Este es el libro 39 conoceras algo fino',
        img: 'https://info-biblioteca.mincyt.gob.ve/wp-content/uploads/2024/07/El_fantasma_de_Canterville-Wilde_Oscar-md.png'
    },

    {
        url: 'https://drive.google.com/file/d/1PpcJphYhERP3N39kmBK4DulnhBpMTvax/view',
        titulo: 'libro 40',
        descripcion: 'Este es el libro 40 conoceras algo fino',
        img: 'https://m.media-amazon.com/images/I/81PKOR8tZIL._UF894,1000_QL80_.jpg'
    },

    {
        url: 'https://drive.google.com/file/d/15ZSvrf04Gi4RH717WR7Or_GSY2ydEJlh/view',
        titulo: 'libro 41',
        descripcion: 'Este es el libro 41 conoceras algo fino',
        img: 'https://imgv2-1-f.scribdassets.com/img/document/145900168/original/6be9f410a3/1?v=1'
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

