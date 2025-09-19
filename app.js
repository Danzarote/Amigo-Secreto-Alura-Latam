// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
  let input = document.querySelector(".input-name");
  if (input.value.trim() == "") {
    alert("Por favor ingrese un nombre");
  } else {
    amigos.push(input.value.trim());
  }

  input.value = "";

  let listaAmigos = document.querySelector(".name-list");

  listaAmigos.innerHTML = "";

  for (i = 0; i < amigos.length; i++) {
    listaAmigos.innerHTML += "<li>" + amigos[i] + "</li>";
  }
}

function sortearAmigo() {
  if (amigos.length > 0) {
    let ganador = Math.floor(Math.random() * amigos.length);
    let ganadorList = document.querySelector(".result-list");
    ganadorList.innerHTML = `${amigos[ganador]}`;
  }
}
