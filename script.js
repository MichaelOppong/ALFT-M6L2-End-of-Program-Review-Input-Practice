let stringButton = document.querySelector(".stringButton");
let numberButton = document.querySelector(".numberButton");

let stringInput = document.querySelector(".stringInput");
let numberInput = document.querySelector(".numberInput");

stringButton.addEventListener('click', function() {
  let string = stringInput.value;
  console.log(string);
  console.log(typeof(string))
});

numberButton.addEventListener('click', function() {
  let number = numberInput.value;
  console.log(number);
  console.log(typeof(number));
   number = parseInt(numberInput.value);
  console.log(number);
  console.log(typeof(number));
});