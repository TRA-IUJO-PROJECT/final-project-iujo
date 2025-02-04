document.addEventListener('DOMContentLoaded', function(e){
    debugger;
    e.preventDefault();
    mostrarBienvenida();
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


function confirmLogout(event) {
    event.preventDefault();
    const confirmation = confirm("¿Estás seguro de que deseas cerrar sesión?");
    if (confirmation) {
        localStorage.removeItem('usuarioLogueado');
        window.location.href = "../templates/login.html";
    }
}

