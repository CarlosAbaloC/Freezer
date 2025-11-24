document.addEventListener("DOMContentLoaded", () => {

  function configurarModal(botonSelector, modalId, cerrarId) {
      const boton = document.querySelector(botonSelector);
      const modal = document.getElementById(modalId);
      const cerrar = document.getElementById(cerrarId);

      boton.addEventListener("click", e => {
        e.preventDefault();
        modal.style.display = "flex";
        document.body.classList.add("modal-open");
      });

      cerrar.addEventListener("click", () => {
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
      });

      modal.addEventListener("click", (e) => {
        if (e.target === modal) {
          modal.style.display = "none";
          document.body.classList.remove("modal-open");
        }
      });
  }

  

  configurarModal(".btn-login", "modal-login", "cerrar-login");
  configurarModal(".btn-register", "modal-register", "cerrar-registro");

  


});