"use strict";

let idLigar;
let idDesligar;

const lampada = getId("lampada");

function getId(elemento) {
  return document.getElementById(elemento);
}

function botoesLigaDesliga(estadoLiga, estadoDesliga, estadoPisca) {
  const botaoLigar = getId("ligar");
  const botaoDesligar = getId("desligar");
  const botaoPiscar = getId("piscar");

  botaoLigar.disabled = estadoLiga;
  botaoDesligar.disabled = estadoDesliga;
  botaoPiscar.disabled = estadoPisca;
}

function lampadaQuebrada() {
  getId("lampada");
  return lampada.src.includes("quebrada");
}

function ligarLampada() {
  getId("lampada");

  if (!lampadaQuebrada()) {
    lampada.src = "img/ligada.jpg";
    botoesLigaDesliga(true, false);
  }
}

function desligarLampada() {
  getId("lampada");

  if (!lampadaQuebrada()) {
    lampada.src = "img/desligada.jpg";
    botoesLigaDesliga(false, true);
  }
}

function quebrarLampada() {
  getId("lampada");

  lampada.src = "img/quebrada.jpg";
  botoesLigaDesliga(true, true, true);
}

function piscarLampada() {
  const botaoPiscar = getId("piscar");
  if (botaoPiscar.textContent == "Piscar") {
    idLigar = setInterval(ligarLampada, 500);
    idDesligar = setInterval(desligarLampada, 1000);
    botaoPiscar.textContent = "Parar";
  } else {
    pararPiscar();
    botaoPiscar.textContent = "Piscar";
  }
}

function pararPiscar() {
  clearInterval(idLigar);
  clearInterval(idDesligar);
}

function quebrarLampadaPiscar() {
  
}

//eventos
getId("ligar").addEventListener("click", ligarLampada);

getId("desligar").addEventListener("click", desligarLampada);

getId("piscar").addEventListener("click", piscarLampada);

getId("lampada").addEventListener("mouseover", ligarLampada);

getId("lampada").addEventListener("mouseleave", desligarLampada);

getId("lampada").addEventListener("dblclick", quebrarLampada);
