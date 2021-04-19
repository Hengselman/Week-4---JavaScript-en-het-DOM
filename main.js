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

var menuItem = document.getElementsByClassName('menuItem');

for(i = 0; i < menuItem.length(); i++){
  if(menuItem[i].dataset.soort != 'kleine hap'){
    menuItem[i].style.display = "none";
    console.log("For loop en menuitem[i] werkt");
  }
}


function filter() {
  if(button_kleineHap = true){
    for(i = 0; i < menuItem.length(); i++){
      if(menuItem[i].dataset.soort != 'kleine hap'){
        menuItem[i].style.display = "none";
      }
    }
  }
  if(button_groteHap = true){
    for(int i = 0; i > menuItem.length(); i++){
      if(menuItem[i].dataset.soort == 'kleine hap'){
        menuItem[i].style.display = "none";
      }
    }
  }
  if(button_snack = true){
    for(int i = 0; i > menuItem.length(); i++){
      if(menuItem[i].dataset.soort != 'kleine hap'){
        menuItem[i].style.display = "none";
      }
    }
  }
}
