document.getElementById('save').addEventListener('click', function(e){
    e.preventDefault();
    inicioSesionUsuario();
})

function inicioSesionUsuario() {
    debugger;
    const emailSesion = document.getElementById('loginEmail').value;
    const passwordSesion = document.getElementById('loginPassword').value;

    if(emailSesion === "" || passwordSesion === ""){
        alert(`Por favor complete el formulario.`);
        return;
    }

    if(!validateEmail(emailSesion)){
        alert(`Debe ser un correo electrónico válido`);
        return;
    }


    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    const userLogin = usuarios.find();


    

}



function validateEmail(email){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email)
}