
function productosPrincipal(productos) {
    let principal = document.getElementById("principal");
    let html = "";

    productos.forEach((empleo, index) => {
        let col = `<div id="1">`;
        let card = `<div class="card">`;
        //let img = `<img class="card-img-top img-fluid" src="${empleo.ruta}">`;
        //Luego hacemos el filtro
        let cBody = `<div class="card-body">
                                <h5 class="card-title">${empleo.nombre}</h5>
                                <h5 class="card-title">${empleo.sueldo}</h5>
                                <p class="card-title">${empleo.descripcion}</p>
                                <p class="card-title">${empleo.requisitos}</p>
                            </div>`;
            //card += img + cBody;
            card += cBody;
            /*
        if (empleo.oferta == true) {
            
        } else {
            let cBody = `<div class="card-body">
                                <h5 class="card-title">${empleo.nombre}</h5>
                                <p class="card-title">${empleo.descripcion}</p>
                                <p class="card-title">${empleo.precio}</p>
                            </div>`;
            card += img + cBody;
        }
            */
        let boton = `<button class="btn btn-white addBottonE">Solicitar oferta</button>`;
        card += boton;
        col += card;
        principal.innerHTML += col;
    });


    //Agregar los botones, no se puede hacer dentro
    let addBotton = document.querySelectorAll(".addBottonE");
    addBotton.forEach((btn, index) =>{
        btn.addEventListener("click", () => {
            var p = productos;
            //addCarrito(productos[index].id)
            alert("Te has inscrito a la oferta de: " + productos[index].nombre);
        })
    })
}

fetch("../json/trabajos.json")
    .then(response => response.json())
    .then(data => {

        let productos = data.sort(() => 0.5 - Math.random());
        
        //Añadirlos al carrisuel
        
        productosPrincipal(productos);

    })
    .catch(error => console.error("Error en el JSON: ", error));



function filtroRequisitos() {
    var filtro = [];
    var listFiltro = document.querySelectorAll(".form-check-input:checked");
    console.log(listFiltro);
    listFiltro.forEach((filtros) => {
        console.log(filtros.id);
        filtro.push(filtros.id);

    })


    alert("LLAMADA A LA BASE DE DATOS");
    llamadaFiltro(filtro);


    filtro = (document.querySelectorAll(".form-check-input"))
    console.log(filtro)
    alert(filtro)
}


function llamadaFiltro(filtros) {
    console.log("LLAMADA A LA BASE DE DATOS CON FILTROS");
    document.getElementById("principal").innerHTML = "";
    console.log(filtros);
    fetch("../json/trabajos.json")
    .then(response => response.json())
    .then(data => {
        
        let productos = data.filter(item => filtros.some(filtro => item.requisitos.includes(filtro)))
        console.log("PRODUCTOS FILTRADOS");
        console.log(productos);
        
        productosPrincipal(productos);

    })
    .catch(error => console.error("Error en el JSON: ", error));

}