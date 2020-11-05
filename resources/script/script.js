function operate (number1, sign, number2) {
   switch (sign) {
      case '+':
         return add (number1, number2)
      case '-':
         return subtract (number1, number2)
      case '*':
         return multiply (number1, number2)
      case '/':
         return divide (number1, number2)
   }
}
function add (m, n) {
	return m + n;
}
function subtract (m, n) {
	return m - n;
}
function multiply (m, n) {
	return m * n;
}
function divide (m, n) {
	return m / n;
}

console.log(operate(9, '*', 9))