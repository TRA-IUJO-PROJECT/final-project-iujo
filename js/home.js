document.addEventListener('DOMContentLoaded', function(e){
    debugger;
    e.preventDefault();
    const usuarioLogueado = JSON.parse(localStorage.getItem('usuarioLogueado'));
    if (!usuarioLogueado) {
        window.location.href = '../templates/login.html';
    }else{
        history.replaceState(null, null, '../templates/home.html');
    }
})

document.addEventListener('click', function(e){
    e.preventDefault();

    controlarSesion();
})


function controlarSesion(){
    debugger;
    if (confirm(`¿Estás seguro de cerrar sesión?`)) {
        localStorage.removeItem('usuarioLogueado');
        
        window.location.href = '../templates/login.html';
        history.replaceState(null, null, '../templates/login.html');
    }
}