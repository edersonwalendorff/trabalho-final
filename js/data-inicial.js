console.log('Executando Contagem data ...')

import Countdown from "./contagem-regressiva.js";

// Altera e tenha a contagem regressiva

const tempoParaMudar = new Countdown("01 January 2023 00:01:00 GMT-0300"); 
const tempos = document.querySelectorAll("[data-time]");

function mostrarTempo() {
  tempos.forEach((tempo, index) => {
    tempo.innerHTML = tempoParaMudar.total[index];
  });
}
mostrarTempo();
setInterval(mostrarTempo, 1000);