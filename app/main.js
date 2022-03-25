import {provisiones} from "./data/provisiones.js";
import mostrarProvisiones from "../app/components/products/mostrarProvisiones.js";

let text = document.getElementById("text");
let boton = document.getElementById("boton");
let input = document.getElementById("input");
let formulario = document.getElementById("formulario");
let padreContador = document.getElementById("contador");


boton.addEventListener('click',() =>{
    entrada1(input.value);
});


function entrada1 () {
        
        let accion1 = input.value;
        
        if ((accion1 === "mirar por la rendija") || (accion1 === "mirar") || (accion1 === "mirar por rendija")) {
            text.innerText = "Ves que es de noche, hay un hombre con pata de palo pateando un barril que dice GROG y bebiendo del mismo.\nDe repente cae desmayado y no hay nadie alrededor pero notas un manojo de llaves las cuales estan a tu alcance.\nQue haces?";
            
            boton.remove();

            let boton2 = document.createElement("button");
            boton2.innerHTML = "Confirmar";
            boton2.setAttribute("id", "boton2");
            formulario.appendChild(boton2);
            
            boton2.addEventListener('click',() =>{
                entrada2(input.value);
                
            });


        } else {
            Swal.fire({
                title: 'Arrggg...',
                text: 'Opción no disponible. Prueba de nuevo, indicando una acción a realizar',
                color: "#00ff00bb",
                icon: "error",
                iconColor: "#8B0000",
                background: "#000000",
                confirmButtonText: "Reintentar...",
                confirmButtonColor: "#00ff00bb",
            })
        }
}

function entrada2 () {
        
        let accion2 = input.value;
        if ((accion2 == "agarrar las llaves") || (accion2 == "agarrar llaves") || (accion2 == "tomar las llaves") || (accion2 == "tomar llaves") || (accion2 == "coger las llaves") || (accion2 == "coger llaves") || (accion2 == "agarrar") || (accion2 == "coger")) {
            text.innerText = "Extiendes el brazo y agarras el manojo de llaves oxidadas algunas de las cuales se rompen al pasarlas por la rendija. \nComienzas a probar las mismas en la cerradura de la puerta...";
            formulario.style.display = "none";
            
            counter();

        } 
        else {

            Swal.fire({
                title: 'Arrggg...',
                text: 'Opción no disponible. Prueba de nuevo, indicando una acción a realizar',
                color: "#00ff00bb",
                icon: "error",
                iconColor: "#8B0000",
                background: "#000000",
                confirmButtonText: "Reintentar...",
                confirmButtonColor: "#00ff00bb",
        });
        }

};


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
