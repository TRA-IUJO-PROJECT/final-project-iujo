function registrarUsuario(){

    debugger
    const email = document.getElementById('registerEmail').value; //Obtengo el valor de lo que coloca el usuario
    const password = document.getElementById('registerPassword').value;
    const name = document.getElementById('name').value;
    const lastname = document.getElementById('lastname').value;


    //Verificas si esta vacio algun campo
    if(email === "" || password === "" || name === "" || lastname === ""){
        alert(`Por favor complete el formulario.`);
        return;
    }

    let validarEmail = validateEmail(email);

    if(!validarEmail){
        alert(`Debe ser un correo válido`);
        return;
    }

    let usuario = {
        correo: email,
        clave: password,
        nombre: name,
        apellido: lastname
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
    history.replaceState(null, null, '/templates/home.html');

}

function validateEmail(email){
    debugger
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


document.getElementById('save').addEventListener('click', function(e){
    debugger;
    e.preventDefault();

    registrarUsuario();
})