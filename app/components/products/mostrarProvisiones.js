import {carritoDeCompras, cargarCarritoStorage, agregarAlCarrito, actualizarCarrito} from "../cart/agregarAlcarrito.js";
import mostrarTripulacion from "../tripulacion/mostrarTripulacion.js";
import { Tripulacion } from "../../data/tripulacion.js";

export let carritoStorage = window.localStorage;
export let listaProvisiones = document.getElementById("lista");
let continuar = document.getElementById("continuar");
let padreContador = document.getElementById("contador");


export default function mostrarProvisiones (array) {
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
        mostrarTripulacion(Tripulacion);
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

    array.forEach((producto) => {
        let li = document.createElement("li");
        li.innerHTML += 
        `<p><strong>${producto.nombre} - D$${producto.precio}</strong></p>`;
        listaProvisiones.appendChild(li);
        li.addEventListener("click", ()=> {
            agregarAlCarrito(producto.id);
            actualizarCarrito();
            carritoStorage.setItem('carrito', JSON.stringify(carritoDeCompras));
        })
    })
    cargarCarritoStorage();
}


