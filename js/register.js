function registrarUsuario(){

    debugger
    const email = document.getElementById('registerEmail').value; //Obtengo el valor de lo que coloca el usuario
    const password = document.getElementById('registerPassword').value;


    if(email === "" || password === ""){
        alert(`Por favor complete el formulario.`);
        return;
    }

    if(!validateEmail(email)){
        alert(`Debe ser un correo válido`);
        return;
    }

    let usuario = {
        correo: email,
        clave: password
    }

    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    let siUser = usuarios.some(u => u.correo === email);

    if(siUser){
        alert(`El usuario '${email}' ya existe, por favor intente con otro.`)
        return;
    }

    usuarios.push(usuario); 
    
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    alert(`Usuario registrado con exito`);
    window.location.href = '/templates/login.html';

}

function validateEmail(email){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


document.getElementById('save').addEventListener('click', function(e){
    e.preventDefault();

    registrarUsuario();
})