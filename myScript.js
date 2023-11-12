// Script para guardar los comentarios
document.getElementById('btn-submit').addEventListener('click', function() {
    var userInput = document.getElementById('comentariosInput').value;
    
    console.log(userInput);
    window.history.back();
});





// Script para que funcionen los botones 'Volver' (funciona)
document.getElementById("returnButton").addEventListener("click", function(){
  window.location.href = "index.html";
});




// Script para que funcione el boton de busqueda (funciona)
function buscar(valor) {
    switch(valor) {
      case "Argentina":
        window.location.href = "./Argentina.html";
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
        alert("No se encontró ninguna coincidencia.");
    }
}
