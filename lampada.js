"use strict";

const lampada = document.getElementById("lampada");

function id(elemento) {
  return document.getElementById(elemento);
}

function botoesLigaDesliga(estadoLiga, estadoDesliga, estadoPisca) {
  const botaoLigar = document.getElementById("ligar");
  const botaoDesligar = document.getElementById("desligar");
  const botaoPiscar = document.getElementById("piscar");

  botaoLigar.disabled = estadoLiga;
  botaoDesligar.disabled = estadoDesliga;
  botaoPiscar.disabled = estadoPisca;
}

function lampadaQuebrada() {
  id("lampada");
  return lampada.src.includes("quebrada");
}

function ligarLampada() {
  id("lampada");

  if (!lampadaQuebrada()) {
    lampada.src = "img/ligada.jpg";
    botoesLigaDesliga(true, false);
  }
}

function desligarLampada() {
  id("lampada");

  if (!lampadaQuebrada()) {
    lampada.src = "img/desligada.jpg";
    botoesLigaDesliga(false, true);
  }
}

function quebrarLampada() {
  id("lampada");

  lampada.src = "img/quebrada.jpg";
  botoesLigaDesliga(true, true, true);
}

function piscarLampada() {
  id("lampada");
  var intervalo = 0
  var contador = 0

  do {
    botoesLigaDesliga(true, true);
  } while (!lampadaQuebrada && contador < 10) {
    intervalo += 200
    setTimeout("lampada.src='img/ligada.jpg';", intervalo)
    intervalo += 200
    setTimeout("lampada.src='img/desligada.jpg';", intervalo)
    contador++
  }
}

//eventos
id("ligar").addEventListener("click", ligarLampada);

id("desligar").addEventListener("click", desligarLampada);

id("piscar").addEventListener("click", piscarLampada);

id("lampada").addEventListener("mouseover", ligarLampada);

id("lampada").addEventListener("mouseleave", desligarLampada);

id("lampada").addEventListener("dblclick", quebrarLampada);
