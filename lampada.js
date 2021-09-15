"use strict";
const lampada = document.getElementById("lampada");
let idLigar;
let idDesligar;

// function id(elemento) {
//     return document.getElementById(elemento)
// }

const getId = (elemento) => document.getElementById(elemento);

const botoesLigaDesliga = (estadoLiga, estadoDesliga, estadoPisca) => {
  const botaoLigar = getId("ligar");
  const botaoDesligar = getId("desligar");
  const botaoPiscar = getId("piscar");
  botaoLigar.disabled = estadoLiga;
  botaoDesligar.disabled = estadoDesliga;
  botaoPiscar.disabled = estadoPisca;
};

// function lampadaQuebrada() {
//     return lampada.src.includes("quebrada")
// }

const lampadaQuebrada = () => lampada.src.includes("quebrada");

const ligarLampada = () => {
  if (!lampadaQuebrada()) {
    lampada.src = "img/ligada.jpg";
    botoesLigaDesliga(true, false);
  }
};

const desligarLampada = () => {
  if (!lampadaQuebrada()) {
    lampada.src = "img/desligada.jpg";
    botoesLigaDesliga(false, true);
  }
};

const quebrarLampada = () => {
  lampada.src = "img/quebrada.jpg";
  botoesLigaDesliga(true, true, true);
};

const pararPiscar = () => {
  clearInterval(idLigar);
  clearInterval(idDesligar);
};

// Issue #2 resolvida
const piscarLampada = () => {
  const botaoPiscar = document.getElementById("piscar");
  if (botaoPiscar.textContent == "Piscar") {
    idLigar = setInterval(ligarLampada, 500);
    idDesligar = setInterval(desligarLampada, 1000);
    botaoPiscar.textContent = "Parar";
    botaoPiscar.style.backgroundColor = "#FF0000";
  } else {
    pararPiscar();
    botaoPiscar.textContent = "Piscar";
    botaoPiscar.style.backgroundColor = "#00FF00";
  }
};

// eventos
getId("ligar").addEventListener("click", ligarLampada);

getId("desligar").addEventListener("click", desligarLampada);

getId("piscar").addEventListener("click", piscarLampada);

getId("lampada").addEventListener("mouseover", ligarLampada);

getId("lampada").addEventListener("mouseleave", desligarLampada);

getId("lampada").addEventListener("dblclick", quebrarLampada);