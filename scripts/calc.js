let calculation = localStorage.getItem("calc") || "";
document.querySelector(".js-display").innerHTML = calculation;

function updateCalculation(value) {
  calculation += value;
  console.log(calculation);
  localStorage.setItem("calc", calculation);
  document.querySelector(".js-display").innerHTML = calculation;
}
function calculate(calculation) {
  calculation = eval(calculation);
  console.log(calculation);
  document.querySelector(".js-display").innerHTML = calculation;
}
function clearCal() {
  console.log(calculation);
  calculation = "";
  document.querySelector(".js-display").innerHTML = 0;
}
