//Target buttons

const btn = document.querySelectorAll(".drum");

//What should do in every case

function makeSound(key) {
  switch (key) {
    case "7":
      let plate = new Audio("sounds/platillo-1.mp3");
      plate.play();
      break;
    case "8":
      let plate2 = new Audio("sounds/platillo-2.mp3");
      plate2.play();
      break;
    case "9":
      let plate3 = new Audio("sounds/platillo-3.mp3");
      plate3.play();
      break;

    case "4":
      let drum = new Audio("sounds/drum-1.mp3");
      drum.play();
      break;

    case "5":
      let drum2 = new Audio("sounds/drum-2.mp3");
      drum2.play();
      break;

    case "6":
      let drum3 = new Audio("sounds/drum-3.mp3");
      drum3.play();
      break;

    case "1":
      let bass = new Audio("sounds/bass-1.wav");
      bass.play();
      break;
    case "2":
      let triangulo = new Audio("sounds/triangulo.mp3");
      triangulo.play();
      break;
    case "3":
      let bass2 = new Audio("sounds/bass-2.mp3");
      bass2.play();
      break;
    default:
  }
}

// Click event

function handleClick() {
  const btnInnerHtml = this.innerHTML;
  console.log("hizo click");
  makeSound(btnInnerHtml);
  btnAnimation(btnInnerHtml);
}

// Loop for every button who gets clicked

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", handleClick);
}

// Listener of keyboard event

document.addEventListener("keypress", (e) => {
  makeSound(e.key);
  btnAnimation(e.key);
});

function btnAnimation(currentKey) {
  let activeBtn = document.querySelector(".b" + currentKey);

  activeBtn.classList.add("pressed");

  setTimeout(() => {
    activeBtn.classList.remove("pressed");
  }, 150);
}
