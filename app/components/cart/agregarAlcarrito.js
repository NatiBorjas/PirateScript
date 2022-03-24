import {provisiones} from "../../data/provisiones.js";
import { carritoStorage } from "../products/mostrarProvisiones.js";

export let carritoDeCompras = [];
let contenedorProductos = document.getElementById("contenedor-prod");

export function agregarAlCarrito (id) {
    let existente = carritoDeCompras.find(prodE => prodE.id == id);

    if (existente) {
        existente.cantidad++
        document.getElementById(`cantidad${existente.id}`).innerHTML = `<p id=cantidad${existente.id}>Cantidad: ${existente.cantidad}</p>`
        
    } else {

        let agregarProducto = provisiones.find(prod => prod.id == id);
        carritoDeCompras.push(agregarProducto);
        
        agregarProducto.cantidad = 1;
        let div = document.createElement('div');
        div.classList.add('productoEnCarrito');
        div.innerHTML = `<p>${agregarProducto.nombre}</p>
                        <p>Precio D$: ${agregarProducto.precio}</p>
                        <p id=cantidad${agregarProducto.id}>Cantidad: ${agregarProducto.cantidad}</p><button id=borrar${agregarProducto.id}  class="borrarProducto"></button>`;
        contenedorProductos.appendChild(div);

        let eliminarProducto = document.getElementById(`borrar${agregarProducto.id}`);
        eliminarProducto.addEventListener('click', () => {
            eliminarProducto.parentElement.remove();
            carritoDeCompras = carritoDeCompras.filter(el => el.id != agregarProducto.id);
            actualizarCarrito();
            carritoStorage.setItem('carrito', JSON.stringify(carritoDeCompras));
        });
    }
}

export function actualizarCarrito () {
    let contadorCarrito = document.getElementById("contador-carr");
    let total = document.getElementById("total");

    contadorCarrito.innerText = carritoDeCompras.reduce((acc, e) => acc + e.cantidad,0);
    total.innerText = carritoDeCompras.reduce((acc,e) => acc + (e.cantidad * e.precio) ,0)
}

export function cargarCarritoStorage () {
    if (carritoStorage.getItem('carrito') !== null) {
        carritoDeCompras = JSON.parse(carritoStorage.getItem('carrito'));
        carritoDeCompras.forEach((agregarProducto) => {
            let div = document.createElement('div');
            div.classList.add('productoEnCarrito');
            div.innerHTML = `<p>${agregarProducto.nombre}</p>
                            <p>Precio D$: ${agregarProducto.precio}</p>
                            <p id=cantidad${agregarProducto.id}>Cantidad: ${agregarProducto.cantidad}</p><button id=borrar${agregarProducto.id}  class="borrarProducto"></button>`
            contenedorProductos.appendChild(div);

            let eliminarProducto = document.getElementById(`borrar${agregarProducto.id}`);
            eliminarProducto.addEventListener('click', () => {
            eliminarProducto.parentElement.remove();
            carritoDeCompras = carritoDeCompras.filter(el => el.id != agregarProducto.id);
            actualizarCarrito();
            carritoStorage.setItem('carrito', JSON.stringify(carritoDeCompras));
            });
            actualizarCarrito();
        });
    }
}

