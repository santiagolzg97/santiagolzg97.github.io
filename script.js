"use strict";

const titleElement = document.querySelector(".title");
const messageElement = document.querySelector(".message");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 5;

let play = true;
let noCount = 0;

const TOTAL_LOVE_IMAGES = 6;
let loveCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
});

function handleYesClick() {
  titleElement.innerHTML = "Mi San Valentin <3";
  buttonsContainer.classList.add("hidden");
  //changeImage("yes");
  catImg.src = "img/love-0.jpeg";
  messageElement.innerHTML = "Gracias por decir que si <3";
  loveCount = 1
  changeImageYes();
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "No",
    "En serio puuuuees :(",
    "Churrita , seguraaaa? :(",
    "Me estoy poniendo triste :(",
    "Por favorcito :(",
    "Sordooo",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function generateLoveMessage(index) {
  const messages = [
    "Gracias por decir que si <3",
    "Han sido unos meses maravillosos :3",
    "LLenos de momentos hermosos",
    "Y divertidos tambien, y todo te da vuelta y todo te da vueltaaa jaja",
    "6 Hermosos meses",
    "Ya celebraremos mi churrita , te amo <3",
  ];
  return messages[index];
}


function changeImage(image) {
  catImg.src = `img/cat-${image}.jpg`;
}

function changeImageYes() {
  // Cambia la imagen cada 4 segundos
  setInterval(() => {
      catImg.src = `img/love-${loveCount}.jpeg`;
      messageElement.innerHTML = generateLoveMessage(loveCount)
      loveCount = (loveCount + 1) % TOTAL_LOVE_IMAGES; // Incrementa el índice de la imagen
  }, 5000);
}

function updateNoButtonText() {
  messageElement.innerHTML = generateMessage(noCount);
}
