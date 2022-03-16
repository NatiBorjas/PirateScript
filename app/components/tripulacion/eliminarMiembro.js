import { Tripulacion } from "../../data/tripulacion.js";

let contenedorTripulacion = document.getElementById("tripulacion");

export default function eliminarMiembro(id) {
    contenedorTripulacion.remove();

    let miembroEliminado = Tripulacion.find(miembroE => miembroE.id == id);
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
}