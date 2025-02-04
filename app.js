document.addEventListener('DOMContentLoaded', function(e){
    e.preventDefault();
    mantenerHome();
})

function mantenerHome(){
    history.replaceState(null, null, '/templates/home.html');
}