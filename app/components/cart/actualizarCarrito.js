
let contadorCarrito = document.getElementById("contador-carr");
let total = document.getElementById("total");


export default function actualizarCarrito (carritoDeCompras) {
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