var add = function (num1, num2) {
  return num1 + num2;
};

var subtract = function (num1, num2) {
  return num1 - num2;
};

var firstNum = parseInt(prompt("Enter a number:"));
console.log("first:" + firstNum);
var secondNum = parseInt(prompt("Enter another number:"));
console.log("second:" + secondNum);

var answer = add(firstNum);
console.log(answer);
