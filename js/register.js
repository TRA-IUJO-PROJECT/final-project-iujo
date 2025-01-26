function registrarUsuario(){

    debugger
    const email = document.getElementById('registerName').value;
    const password = document.getElementById('registerPassword').value;

    if(!validateEmail(email)){
        alert(`Debe ser un correo`);
        return;
    }

    let usuario = {
        correo: email,
        clave: password
    }

    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    let siUser = usuarios.some(u => u.correo === email);

    if(siUser){
        alert(`Ya existe`)
        return;
    }

    usuarios.push(usuario);

    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    
    alert(`Usuario registrado con exito`);

}

function validateEmail(email){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


document.getElementById('save').addEventListener('click', function(e){
    e.preventDefault();

    registrarUsuario();
})