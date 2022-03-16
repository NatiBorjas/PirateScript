
import {provisiones} from "./data/provisiones.js";
import mostrarProvisiones from "../app/components/products/mostrarProvisiones.js";

let text = document.getElementById("text");
let boton = document.getElementById("boton");
let input = document.getElementById("input");
let formulario = document.getElementById("formulario");
let padreContador = document.getElementById("contador");
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
            btnContador.onclick = () => {mostrarProvisiones(provisiones)}
        }
    }
}
