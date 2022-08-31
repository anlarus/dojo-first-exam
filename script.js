const btn = document.querySelector("#btn");
const year = document.getElementById("year");
const uName = document.querySelector("#uName");



function readHandler() {
  alert("You would be redirected to an external source, are you shore?")
}

function buttonHandler() {
  btn.innerText == "Learn more >>"
    ? (btn.innerText = "Explore how >>")
    : (btn.innerText = "Learn more >>");
}

function clickHandler(el) {
    btn.style.color == "black"
      ? (el.style.color = "yellow")
      : (el.style.color = "black");
  }
year.innerText = counter;

function yearIncreaser() {
    year.innerText++ 
}
