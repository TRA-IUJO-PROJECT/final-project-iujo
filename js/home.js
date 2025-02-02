document.addEventListener('DOMContentLoaded', function(e){
    e.preventDefault();
    const usuarioLogueado = JSON.parse(localStorage.getItem('usuarioLogueado'));
    if (!usuarioLogueado) {
        window.location.href = '../templates/login.html';
    }
})

document.addEventListener('click', function(e){
    e.preventDefault();

    controlarSesion();
})


function controlarSesion(){
    if (confirm(`¿Estás seguro de cerrar sesión?`)) {
        localStorage.removeItem('usuarioLogueado');
        
        window.location.href = '../templates/login.html';
        history.replaceState(null, null, '../templates/login.html');
    }
}