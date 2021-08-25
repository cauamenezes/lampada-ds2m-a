"use strict";

function ligarLampada() {
  const lampada = document.getElementById("lampada")
  lampada.src = "img/ligada.jpg"
}

function desligarLampada() {
const lampada = document.getElementById("lampada")
lampada.src = "img/desligada.jpg"
}

//eventos
document.getElementById("ligar").addEventListener("click", ligarLampada);

document.getElementById("desligar").addEventListener("click", desligarLampada);
