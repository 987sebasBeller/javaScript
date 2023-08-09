import sumar from "./sumador";
import multiplicar from "./multiplicador";
const formSumar = document.querySelector("#sumar-form");
const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const div = document.querySelector("#resultado-div");
const btnMultiplicar=document.getElementById("multiplicar-button");
formSumar.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);
  div.innerHTML = `
  <h2>Resultado:</h2>  
  <p>${sumar(firstNumber, secondNumber)} </p>`;
});
btnMultiplicar.addEventListener("click", () => {
  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);
  div.innerHTML = `
  <h2>Resultado:</h2>  
  <p>${multiplicar(firstNumber, secondNumber)} </p>`;
});
