// let entrada = prompt("Digite o ano que você nasceu");
// alert(2023 - entrada);
// alert(typeof entrada);
let section = document.querySelector("section");

function toDark() {
  section.classlist.add("dark");
  section.classlist.remove("light");
}

function toJedi() {
  section.classlist.add("light");
  section.classlist.remove("dark");
}

toDark();
