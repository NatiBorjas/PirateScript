import eliminarMiembro from "./eliminarMiembro.js";
let contenedorTripulacion = document.getElementById("tripulacion");

export default function mostrarTripulacion(array) {
    
    let listaProvisiones = document.getElementById("lista");
    listaProvisiones.remove();
    formulario.remove();

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

    array.forEach( (miembro) => {
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


    // fetch('/app/data/tripulacion.json')
    //     .then( (res) => res.json())
    //     .then( (data) => {
    //         data.forEach( (miembro) => {
    //             let div = document.createElement("div");
    //             div.classList.add(`Id${miembro.id}`,`miembro`);
    //             div.innerHTML += `<p class="miembro-hover">Nombre: ${miembro.nombre} - Edad: ${miembro.edad} - Puesto: ${miembro.puesto}</p>`
    //             contenedorTripulacion.appendChild(div);

    //             div.addEventListener("click", () =>  {
    //                 Swal.fire({
    //                     title: 'Triste final...',
    //                     text: 'Han derrotado a '+ miembro.nombre,
    //                     imageUrl: miembro.img,
    //                     imageWidth: 200,
    //                     imageHeight: 200,
    //                     background: "#000000",
    //                 })
    //                 eliminarMiembro(miembro.id);
    //             })
    //         })
    //     })
}