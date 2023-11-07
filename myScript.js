// Script para guardar los comentarios
document.getElementById('btn-submit').addEventListener('click', function() {
    var userInput = document.getElementById('comentariosInput').value;
    
    console.log(userInput);
    window.history.back();
});





// Script para que funcionen los botones 'Volver' (funciona)
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('returnButton').addEventListener('click', function() {
        window.history.back();
    });
});




// Script para que funcione el boton de busqueda
