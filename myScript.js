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
function buscar(valor) {
    switch(valor) {
      case "Argentina":
        window.location.href = "./Argentina";
        break;
      case "Barcelona":
        window.location.href = "./Barcelona.html";
        break;
      case "Inter de Miami":
        window.location.href = "./Inter de Miami.html";
        break;
      case "Paris Saint-Germain":
        window.location.href = "./Paris Saint-Germain.html";
        break;
      default:
        alert("No se encontró ninguna coincidencia.");}
 }
