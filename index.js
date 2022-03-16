
let text = document.getElementById("text");
let boton = document.getElementById("boton");
let input = document.getElementById("input");
let formulario = document.getElementById("formulario");
let padreContador = document.getElementById("contador");
let contenedorTripulacion = document.getElementById("tripulacion");
let accion = "";

boton.addEventListener("click",getInput)

function getInput(){
    accion = document.getElementById("input").value;
    entrada1(accion);
    accion = document.getElementById("input").value;
    entrada2(accion);
}

function entrada1 () {
    if ((accion === "mirar por la rendija") || (accion === "mirar") || (accion === "mirar por rendija")) {
    text.innerText = "Ves que es de noche, hay un hombre con pata de palo pateando un barril que dice GROG y bebiendo del mismo.\nDe repente cae desmayado y no hay nadie alrededor pero notas un manojo de llaves las cuales estan a tu alcance.\nQue haces?";
    }
}

function entrada2 () {
    if ((accion == "agarrar las llaves") || (accion == "agarrar llaves") || (accion == "tomar las llaves") || (accion == "tomar llaves") || (accion == "coger las llaves") || (accion == "coger llaves") || (accion == "agarrar") || (accion == "coger")) {
    text.innerText = "Extiendes el brazo y agarras el manojo de llaves oxidadas algunas de las cuales se rompen al pasarlas por la rendija. \nComienzas a probar las mismas en la cerradura de la puerta...";
    formulario.style.display = "none";
    counter();
    }
}

function counter () {
    let btnContador = document.createElement("button");
    let contador = 0;
    btnContador.innerHTML = "Probar llaves"
    padreContador.appendChild(btnContador);
    btnContador.onclick = () => {
        contador += 1;
        btnContador.innerHTML = "Probando llave..." + contador;
        if (contador === 8) {
            text.innerText = "Te liberaste. Empiezas a observar a tu alrededor: escuchas risas, gritos y peleas desde el interior del barco. La brisa soplando suavemente sobre tu pelo y cara y ves una isla a unos kms. Recuerdas de cuando soñabas con ser pirata y navegar los mares libremente. \nLuego de un rato el hombre inconsciente despierta y al verte grita -Polizón!, en guardia!- ves que desenfunda su espada. Te tiras al piso y le pides que te acepte como parte de la tripulación. \nDespués de unas horas de debate, te acepta como Grumete. \nFelicitaciones!";
            btnContador.innerHTML = "Continuar..."
            btnContador.onclick = () => {mostrarProvisiones()}
        }
    }
}

// CARRITO PROVISIONES

let listaProvisiones = document.getElementById("lista");
let carrito = document.getElementById("carrito");
let contenedorProductos = document.getElementById("contenedor-prod");
let contadorCarrito = document.getElementById("contador-carr");
let total = document.getElementById("total");
let continuar = document.getElementById("continuar");
let carritoDeCompras = []

// document.addEventListener("DOMContentLoaded", (e) => {
//     if (localStorage.getItem("carrito")) {
//         carritoDeCompras = JSON.parse(localStorage.getItem("carrito"))
//         actualizarCarrito(carritoDeCompras)
//     }
// })

function mostrarProvisiones () {
    padreContador.remove();
    input.remove();
    boton.remove();
    formulario.style.display = "block";

    text.innerText = "Tu primer tarea es ir a comprar provisiones...";
    
    let btnContinuar= document.createElement("button");
    btnContinuar.setAttribute("id","boton-continuar" );
    btnContinuar.innerHTML = "Confirmar compra"
    continuar.appendChild(btnContinuar);
    btnContinuar.onclick = () => {
        mostrarTripulacion()
    }


    let botonCarrito = document.createElement("button");
    botonCarrito.setAttribute("id","btn-carrito");
    botonCarrito.innerHTML = `<i id="btn-icon"></i>`
    formulario.appendChild(botonCarrito);

    const carritoAbrir = document.getElementById('btn-carrito');
    const carritoCerrar = document.getElementById('cerrarCarrito');
    const modalCarrito = document.getElementsByClassName('contenedor-carrito')[0];
    carritoAbrir.addEventListener('click', () => {
        modalCarrito.classList.toggle('carrito-active')
    });
    carritoCerrar.addEventListener('click', () => {
        modalCarrito.classList.toggle('carrito-active')
    })


    fetch('/app/data/provisiones.json')
        .then( (res) => res.json())
        .then( (data) => {
            data.forEach((producto) => {
                let li = document.createElement("li");
                li.innerHTML += `
                <p><strong>${producto.nombre} - D$${producto.precio}</strong></p>`
                listaProvisiones.appendChild(li);
                li.addEventListener("click", ()=> {
                    agregarAlCarrito(producto.id);
                })
            })
        } )
}

function agregarAlCarrito (id) {
    let existente = carritoDeCompras.find(prodE => prodE.id == id);
    if(existente) {
        existente.cantidad++
        document.getElementById(`cantidad${existente.id}`).innerHTML = `<p id=cantidad${existente.id}>Cantidad:${existente.cantidad}</p>`
        actualizarCarrito()
    } else {
        fetch('/app/data/provisiones.json')
        .then( (res) => res.json())
        .then( (data) => {
            let productoAgregar = data.find(prod => prod.id == id);
        carritoDeCompras.push(productoAgregar);

        productoAgregar.cantidad = 1;
        let div = document.createElement('div');
        div.classList.add('productoEnCarrito');
        div.innerHTML = `<p>${productoAgregar.nombre}</p>
                        <p>Precio D$:${productoAgregar.precio}</p>
                        <p id=cantidad${productoAgregar.id}>Cantidad:${productoAgregar.cantidad}</p>`
        contenedorProductos.appendChild(div);
        actualizarCarrito()
        } )
    }
}

function actualizarCarrito () {
    contadorCarrito.innerText = carritoDeCompras.reduce((acc, e) => acc + e.cantidad,0);
    total.innerText = carritoDeCompras.reduce((acc,e) => acc + (e.cantidad * e.precio) ,0)
    // if (total >= 5000) {
    //     formulario.remove();
    //     lista.remove();
    //     text.innerText = "Lo siento, excediste los 4000 Doblones.\nEstás fuera de presupuesto.\Prueba de nuevo"
    //     mostrarProvisiones(provisiones)
    // }
    // localStorage.setItem("carrito", JSON.stringify(carritoDeCompras))
}

// TRIPULACION

function mostrarTripulacion() {
    formulario.remove();
    listaProvisiones.remove();

    text.innerText = "Vuelves de la tienda y ves que tu tripulación está siendo atacada por otro barco pirata.\nDesenfundas tu espada y corres a ayudarlxs.\nLa batalla es dura y luego de unos minutos logran vencerlxs, con varias bajas.\nDecides si hubo alguna baja en tu tripulación..."
    
    let btnContinuar= document.getElementById("boton-continuar");
    btnContinuar.innerHTML = "No hubo bajas"
    continuar.appendChild(btnContinuar);
    btnContinuar.onclick = () => {
        contenedorTripulacion.remove();

        text.innerText = "Enhorabuena! Logran defender el barco y derrotar a los enemigos, sin sufrir ninguna baja!.\n Realizan un banquete para festejar y relajar luego de la cruenta batalla. :)"

        let btnFin = btnContinuar;
        btnFin.innerHTML = "FIN"

        btnFin.onclick = () => {
            let containerFinal = document.getElementById("container-final");
            containerFinal.classList.toggle("final");
            text.remove();
            btnFin.remove()
        }

        let containerFinal = document.getElementById("container-final");
        containerFinal.classList.toggle("container-final");
    }

    fetch('/app/data/tripulacion.json')
        .then( (res) => res.json())
        .then( (data) => {
            data.forEach( (miembro) => {
                let div = document.createElement("div");
                div.classList.add(`Id${miembro.id}`,`miembro`);
                div.innerHTML += `<p class="miembro-hover">Nombre: ${miembro.nombre} - Edad: ${miembro.edad} - Puesto: ${miembro.puesto}</p>`
                contenedorTripulacion.appendChild(div);

                div.addEventListener("click", () =>  {
                    Swal.fire({
                        title: 'Triste final...',
                        text: 'Han derrotado a '+ miembro.nombre,
                        imageUrl: miembro.img,
                        imageWidth: 200,
                        imageHeight: 200,
                        background: "#000000",
                    })
                    eliminarMiembro(miembro.id);
                })
            })
        })
}

function eliminarMiembro(id) {
    contenedorTripulacion.remove();

    fetch('/app/data/tripulacion.json')
        .then( (res) => res.json())
        .then( (data) => {
            let miembroEliminado = data.find(miembroE => miembroE.id == id);
        text.innerText = "Encuentras a " + miembroEliminado.nombre + " a estribor, yaciendo en el piso con una gran herida en las costillas.\nLamentablemente no hay manera de salvarlx.\nLe realizan un entierro en el mar para luego seguir su trayecto, con el ánimo desganado por la reciente perdida. :("
        
        let btnContinuar= document.getElementById("boton-continuar");
        let btnFin = btnContinuar;
        btnFin.innerHTML = "FIN"

        btnFin.onclick = () => {
            let containerFinal = document.getElementById("container-final");
            containerFinal.classList.toggle("final");
            text.remove();
            btnFin.remove()
        }
        })
}

