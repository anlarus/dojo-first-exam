const btn = document.querySelector("#btn");
const year = document.getElementById("year");
const uName = document.querySelector("#uName");
console.log(megusta, "AQUI LOS ELEMENTOS ME GUSTA");
// const likesDisplay1 = document.querySelector("#likes");
// const likesDisplay2 = document.querySelector("#likes2");
// const likesDisplay3 = document.querySelector("#likes3");

// let counter = 0;
// let counter2 = 0;
// let counter3 = 0;

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

// function  yearHandler(par) {
//   if (par == 1) {
//     console.log("like 1 clicked");
//     megusta[0].innerText++;
//     // counter++;
//     // megusta[0].innerText = counter;

//     // likesDisplay1.innerHTML = `${counter} `;
//   } else if (par == 2) {
//     console.log("like 2 clicked");
//     megusta[1].innerText++;
//     // counter2++;
//     // megusta[1].innerText = counter2;
//     // likesDisplay2.innerHTML = `${counter2} `;
//   } else {
//     console.log("like 3 clicked");
//     megusta[2].innerText++;
//     // counter3++;
//     // megusta[2].innerText = counter3;
//     // likesDisplay3.innerHTML = `${counter3} `;
//   }
// }
