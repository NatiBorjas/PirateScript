const carritoAbrir = document.getElementsByClassName('btn-carrito');
const modalCarrito = document.getElementsByClassName('contenedor-carrito')[0]

carritoAbrir.addEventListener('click', ()=> {
    modalCarrito.classList.toggle('carrito-active')
    console.log(carritoAbrir)
})