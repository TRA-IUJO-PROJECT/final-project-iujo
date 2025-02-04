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
        url: 'https://www.jugandoainvertir.com.ar/descargas/Padre-Rico-Padre-Pobre.pdf',
        titulo: 'libro 2',
        descripcion: 'Este es el libro 2 conoceras algo fino',
        img: '../assets/img/imagen-1.jpg'
    },

    {
        url: 'https://www.shalon.edu.ec/aula/pluginfile.php/899/mod_resource/content/1/La_culpa_es_de_la_vaca.pdf',
        titulo: 'libro 3',
        descripcion: 'Este es el libro 3 conoceras algo fino',
        img: '../assets/img/imagen-2.jpg'
    },
    {
        url: 'https://www.diversual.com/img/blog/90/kamasutra-diversual.pdf',
        titulo: 'libro 4',
        descripcion: 'Este es el libro 4 conoceras algo fino',
        img: 'https://www.elejandria.com/covers/Kamasutra_el_arte_de_amar-Anonimo-lg.png'
    },
    {
        url: 'http://bibliotecadigital.ilce.edu.mx/Colecciones/ObrasClasicas/_docs/Odisea.pdf',
        titulo: 'libro 5',
        descripcion: 'Este es el libro 5 conoceras algo fino',
        img: 'https://www.elejandria.com/covers/La_Odisea-Homero-lg.png'
    },
    {
        url: 'http://www.cutonala.udg.mx/sites/default/files/adjuntos/el_camino_de_las_lagrimas_0.pdf',
        titulo: 'libro 6',
        descripcion: 'Este es el libro 6 conoceras algo fino',
        img: 'https://m.media-amazon.com/images/I/91WBBwBbquL.jpg'
    },
    {
        url: 'https://drive.google.com/file/d/1ZIjtZtgAFBVdK-m5Mes9JMXg7J0OUzAs/view',
        titulo: 'libro 7',
        descripcion: 'Este es el libro 7 conoceras algo fino',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsFd6e531-AjL4_VrMG2vjVSoRlfAaV1h5KA&s'
    },
    {
        url: 'https://drive.google.com/file/d/1iHn4ZwwZ7adCZ-5vnWvjA1p0TxzRE6rf/view',
        titulo: 'libro 8',
        descripcion: 'Este es el libro 8 conoceras algo fino',
        img: 'https://pictures.abebooks.com/inventory/22734954421.jpg'
    },
    {
        url: 'https://drive.google.com/file/d/1nrjaWIpw9DxmzADan94o6Em6t3O6dAi-/view',
        titulo: 'libro 9',
        descripcion: 'Este es el libro 9 conoceras algo fino',
        img: 'https://www.aique.com.ar/wp-content/uploads/tapa_mil_y_una_noches_0.jpg'
    },
    {
        url: 'https://drive.google.com/file/d/1pKr3ffyGVnzBoQH99dQwXWjQQkFINL_6/view',
        titulo: 'libro 10',
        descripcion: 'Este es el libro 10 conoceras algo fino',
        img: 'https://traficantes.net/sites/default/files/styles/large/public/book_covers/9788417146030.gif?itok=-GkiI_vj'
    },

    {
        url: 'https://drive.google.com/file/d/17MGVnDkhHtW65TuguWocyDT3SVDCSLVc/view',
        titulo: 'libro 11',
        descripcion: 'Este es el libro 11 conoceras algo fino',
        img: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1516973255i/38209152.jpg'
    },

    {
        url: 'https://drive.google.com/file/d/1MVlXT27v2MXRdAcTEd7mpMWdlQsYzN_Q/view',
        titulo: 'libro 12',
        descripcion: 'Este es el libro 12 conoceras algo fino',
        img: 'https://www.elejandria.com/covers/Un_asesinato-Anton_Chejov-lg.png'
    },

    {
        url: 'https://drive.google.com/file/d/1ewlxEm-fXXCxZfFSrI0f1pYyYDL_nBJI/view',
        titulo: 'libro 13',
        descripcion: 'Este es el libro 13 conoceras algo fino',
        img: 'https://info-biblioteca.mincyt.gob.ve/wp-content/uploads/2024/03/El_jardin_de_los_cerezos-Anton_Chejov-md.png'
    },

    {
        url: 'https://drive.google.com/file/d/1pDwoZZuPMaCqZSSUVZI9oZdn5NopGhTc/view',
        titulo: 'libro 14',
        descripcion: 'Este es el libro 14 conoceras algo fino',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5c0DvHOFmo71CZtQvGgH2kQvAObt82Cu6UQ&s'
    },

    {
        url: 'https://drive.google.com/file/d/1FpceuSJRKYFa-D3OaDZxV6-9LhYeBZIf/view',
        titulo: 'libro 15',
        descripcion: 'Este es el libro 15 conoceras algo fino',
        img: 'https://info-biblioteca.mincyt.gob.ve/wp-content/uploads/2024/05/El_misterio_de_Copper_Beeches-Conan_Doyle_Arthur-md.jpg'
    },

    {
        url: 'https://drive.google.com/file/d/1DjvkQKGnSyRsFjzSN71bh3Z_WPMP-psC/view',
        titulo: 'libro 16',
        descripcion: 'Este es el libro 16 conoceras algo fino',
        img: 'https://www.elejandria.com/covers/El_misterio_del_valle_Boscombe-Conan_Doyle_Arthur-lg.png'
    },

    {
        url: 'https://drive.google.com/file/d/1XxSFTv9uPrNMUJ65jVsGFXM4cRhV6qMd/view',
        titulo: 'libro 17',
        descripcion: 'Este es el libro 17 conoceras algo fino',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCbfoNJv2o4Qe7QoGXEmo7DKIdZfVYZM6NGQ&s'
    },

    {
        url: 'https://drive.google.com/file/d/1Wd578Y6LODMMaIKWXIvGz0ucJIf-mVMG/view',
        titulo: 'libro 18',
        descripcion: 'Este es el libro 18 conoceras algo fino',
        img: 'https://imagessl4.casadellibro.com/a/l/s5/54/9788467029154.webp'
    },

    {
        url: 'https://drive.google.com/file/d/1kU9G0MmO4fa1NwFn-bZAeqmOv4dldH9E/view',
        titulo: 'libro 19',
        descripcion: 'Este es el libro 19 conoceras algo fino',
        img: 'https://static.audioteka.com/es/images/products/arthur-conan-doyle/espanto-en-las-alturas-duze.jpg'
    },

    {
        url: 'https://drive.google.com/file/d/1UxReqcl7MXZ2Z5e67xhKhGWYze4KLqio/view',
        titulo: 'libro 20',
        descripcion: 'Este es el libro 20 conoceras algo fino',
        img: 'https://www.blackcat-cideb.com/uploads/2020/02/COVER_Tartarin-de-Tarascon_b088179d5c03ba3eefe3cc07caa87efd.jpg'
    },

    {
        url: 'https://drive.google.com/file/d/1ygo_eaqz-_2O_dZdg02J1C_jGMG8NiaA/view',
        titulo: 'libro 21',
        descripcion: 'Este es el libro 21 conoceras algo fino',
        img: 'https://info-biblioteca.mincyt.gob.ve/wp-content/uploads/2024/05/Proceso_por_asesinato-Charles_Dickens-md.jpg'
    },

    {
        url: 'https://drive.google.com/file/d/1A5Tb38dOQAVDkhqlo5Ub5JQXprvyoD1y/view',
        titulo: 'libro 22',
        descripcion: 'Este es el libro 22 conoceras algo fino',
        img: 'https://quelibroleo.com/images/libros/libro_1433936204.jpg'
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

