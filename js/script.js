window.onload = function() {
this.alert("El script funciona")
document.querySelector(".nav-carta").addEventListener("click", () => {
    window.location.href = "carta.html";
  });
  document.querySelector(".nav-nosotros").addEventListener("click", () => {
    window.location.href = "nosotros.html";
  });
  document.querySelector(".nav-encuentranos").addEventListener("click", () => {
    window.location.href = "encuentranos.html";
  });
  document.querySelector(".nav-contacto").addEventListener("click", () => {
    window.location.href = "contacto.html";
  });
}