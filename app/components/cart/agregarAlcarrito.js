import actualizarCarrito from "./actualizarCarrito.js";
import {provisiones} from "../../data/provisiones.js";

let carritoDeCompras = [];
let contenedorProductos = document.getElementById("contenedor-prod");


export default function agregarAlCarrito (id) {
    let existente = carritoDeCompras.find(prodE => prodE.id == id);
    if(existente) {
        existente.cantidad++
        document.getElementById(`cantidad${existente.id}`).innerHTML = `<p id=cantidad${existente.id}>Cantidad:${existente.cantidad}</p>`
        actualizarCarrito(carritoDeCompras);
    } else {

        let productoAgregar = provisiones.find(prod => prod.id == id);
        carritoDeCompras.push(productoAgregar);
    
        productoAgregar.cantidad = 1;
        let div = document.createElement('div');
        div.classList.add('productoEnCarrito');
        div.innerHTML = `<p>${productoAgregar.nombre}</p>
                            <p>Precio D$:${productoAgregar.precio}</p>
                            <p id=cantidad${productoAgregar.id}>Cantidad:${productoAgregar.cantidad}</p>`
        contenedorProductos.appendChild(div);
        actualizarCarrito(carritoDeCompras);
    }
}