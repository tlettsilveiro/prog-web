// Script para guardar los comentarios
document.getElementById('btn-submit').addEventListener('click', function() {
  var texto = document.getElementById('texto').value;
  alert("Mensaje a guardar:" + texto);
});


// Script para que funcionen los botones 'Volver' (funciona)
function goToPage() {
  window.location.href = "index.html";
}


// Script para que funcione el boton de busqueda (funciona)
function buscar(valor) {
  var value = valor.toLowerCase();
  switch(value) {
      case "argentina":
          window.location.href = "./Argentina.html";
          break;
      case "barcelona":
          window.location.href = "./Barcelona.html";
          break;
      case "inter de miami":
          window.location.href = "./Inter de Miami.html";
          break;
      case "paris saint-germain":
          window.location.href = "./Paris Saint-Germain.html";
          break;
      default:
          alert("No se encontró ninguna coincidencia.");
  }
}