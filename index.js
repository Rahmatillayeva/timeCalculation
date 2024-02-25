const elementForm = document.querySelector(".form");
const elementFormInput = document.querySelector(".form-input");
const velocityPedestrian = 3.6;
const velocityBicycle = 20;
const velocityCar = 70;
const velocityAirplane = 800;
const resultPedestrian = document.querySelector(".Result-Pedestrian")
const resultBicycle = document.querySelector(".Result-Bicycle")
const resultCar = document.querySelector(".Result-Car")
const resultAirplane = document.querySelector(".Result-Airplane")


elementForm.addEventListener("submit", function (evn) {
  evn.preventDefault();

  function timeCalculation(velocity) {
      return `${Math.floor(inputValue/velocity)} hour ${((inputValue%velocity)/velocity * 60).toFixed(0) } minute`
  }

  const inputValue = elementFormInput.value;
  if (inputValue < 0 || isNaN(inputValue)) {
    alert("Error. Please enter the data in the correct order (input data must be in the form of positive numbers)!")
  }else{
  resultPedestrian.textContent = `Hour: ${timeCalculation(velocityPedestrian)}`;
  resultBicycle.textContent = `Hour: ${timeCalculation(velocityBicycle)}`;
  resultCar.textContent = `Hour: ${timeCalculation(velocityCar)}`;
  resultAirplane.textContent = `Hour: ${timeCalculation(velocityAirplane)}`;
}
});
