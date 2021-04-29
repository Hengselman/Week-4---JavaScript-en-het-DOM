console.log("Javascript ingeladen.");

const broodje_doner = document.querySelector('#broodje_doner');
const turkse_pizza = document.querySelector('#turkse_pizza');
const kapsalon = document.querySelector('#kapsalon');
const hamburger = document.querySelector('#hamburger');
const kabouter_speciaal = document.querySelector('#kabouter_speciaal');
const pita_kaas = document.querySelector('#pita_kaas');
const diverse_snacks = document.querySelector('#diverse_snacks');
const broodje_paddestoel = document.querySelector('#broodje_paddestoel');
const kaboutersalon = document.querySelector('#kaboutersalon');


const buttonFilter = document.getElementsByClassName('buttonFilter');
const buttonPopulair = document.getElementById('buttonPopulair');
const buttonKleineHap = document.getElementById('buttonKleineHap');
const buttonGroteHap = document.getElementById('buttonGroteHap');
const buttonSnack = document.getElementById('buttonSnack');
const buttonVegetarisch = document.getElementById('buttonVegetarisch');

var menuItem = document.getElementsByClassName('menuItem');

function addEventListenerCheckbox() {
  buttonPopulair.addEventListener("change", () => filter())
  buttonKleineHap.addEventListener("change", () => filter())
  buttonGroteHap.addEventListener("change", () => filter())
  buttonSnack.addEventListener("change", () => filter())
  buttonVegetarisch.addEventListener("change", () => filter())
}

function filter() {
  console.log("Function Filter() werkt.")
}

addEventListenerCheckbox();
