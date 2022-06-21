times = [["0500", "Alarm"],["0505", "Breakfast"],["0515", "Dress & Teeth"],["0520", "Run"],["0555", "Shower"],["0600", "Dress"],["0605", "Revise"],["0630", "Break"],["0635", "Revise"],["0700", "Break"],["0705", "Revise"],["0730", "Break"],["0735", "Revise"],["0800", "Reflect"],["0820", "Complete"]]

for (x in times) {
  createCard(times[x])
}

function createCard(card) {
  let el = document.createElement("div")
  el.classList.add("task")
  el.innerHTML = `<h4>${card[0]}</h4><h3>${card[1]}</h3>`
  document.querySelector(".tasks").appendChild(el)
  el.addEventListener("click", function() {deleteCard(el)});
}

function deleteCard(card) {
  card.style.margin = `${0-card.offsetHeight/2}px`
  card.style.opacity = 0
  card.style.background = "#00FF00"
  setTimeout(function () {
    card.remove()
    checkCards()
  }, 500);
}

function checkCards() {
  tasks = document.querySelector(".tasks")
  if (tasks.childElementCount == 0) {
    setTimeout(function () {
      document.body.style.background = "#3199F5"
      tasks.style.display = "none";
      document.querySelector(".complete").style.display = "flex";
    }, 500);
  }
}

setInterval(function () {
  c = new Date()
  document.querySelector("h1").innerHTML = `${c.getHours()}${c.getMinutes()}`
}, 10);
