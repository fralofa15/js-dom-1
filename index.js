//Variabile immagine lampadina
const lamp = document.querySelector("#id_img");
//Variabile bottone
const button = document.querySelector("button");

//Funzione per il cambio di immagine 
//SE la variabile lamp include img/white_lamp.png allora si può accendere 
//ALTRIMENTI si può spegnere 
function lampadina() {
    if (lamp.src.includes("img/white_lamp.png")) {
        lamp.src = "img/yellow_lamp.png";
        button.textContent = "spegni";
    } else {
        lamp.src = "img/white_lamp.png";
        button.textContent = "accendi";
    }
}

//Evento che richiama la funzione per accendere e spegnere la lampadina
button.addEventListener("click", lampadina);