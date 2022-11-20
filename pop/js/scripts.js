const options = { day: 'numeric', month: 'short' };
var today  = new Date();
today = today.toLocaleDateString("en-GB", options);
document.getElementById("f1").innerHTML = today;
document.getElementById("f2").innerHTML = today;
document.getElementById("p1").innerHTML = today;
document.getElementById("p2").innerHTML = today;

const full = document.getElementById("fullscreen");
const menu = document.getElementById("menu");
const card = document.getElementById("card");
const seemore = document.getElementById("seemore");
const more = document.getElementById("more");
const pop = document.getElementById("pop");
const back = document.getElementById("back");

full.addEventListener("click", function(){
  document.querySelector("html").requestFullscreen();
  full.style.display = "none";
  menu.style.display = "block";
})


pop.addEventListener("click", function(){
  menu.style.display = "none";
  card.style.display = "block";
})

seemore.addEventListener("click", function(){
  card.style.display = "none";
  more.style.display = "block";
})


back.addEventListener("click", function(){
  more.style.display = "none";
  card.style.display = "block";
})