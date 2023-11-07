// Script para guardar los comentarios
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('miFormulario').addEventListener('submit', function(event) {
        event.preventDefault(); // Esto previene el comportamiento predeterminado del formulario
        
        var comentarios = document.getElementById('comentarios').value;
        
        console.log('Comentarios:', comentarios);
    });
});




// Script para que funcionen los botones 'Volver' (funciona)
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('returnButton').addEventListener('click', function() {
        window.history.back();
    });
});




// Script para que funcione el boton de busqueda
