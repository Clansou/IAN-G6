const synth = window.speechSynthesis;

const inputForm = document.querySelector("form");
const inputTxt = document.querySelector(".txt");
const selectedOption = "Microsoft Paul - French (France)"

function speak() {
  if (inputTxt.value !== "") {
    const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
    utterThis.pitch = 1;
    utterThis.rate = 1;
    synth.speak(utterThis);
  }
}

inputForm.onsubmit = function (event) {
  event.preventDefault();

  speak();
};
