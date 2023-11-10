let btnTranslate = document.querySelector("#btn-translate");
let textInput = document.querySelector("#txt-input"); // Corrected the selector
let outputDiv = document.querySelector("#output");

let serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(input) {
  return serverURL + "?" + "text=" + input; // Added "=" after "text"
}

function errorHandler(error) {
  console.log("error occurred ", error); // Corrected the console log message
  alert("something went wrong");
}

function clickHandler() {
  let inputText = textInput.value;

  fetch(getTranslationURL(inputText))
    .then((response) => response.json())
    .then((json) => {
      let translatedText = json.contents.translated;
      outputDiv.innerText = translatedText; // Corrected the variable name
    })
    .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickHandler);
