function sum() {
    let firstNumber = document.getElementById('firstNumber').value;
    let secondNumber = document.getElementById('secondNumber').value;
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    let result = firstNumber + secondNumber;
    document.querySelector('span').innerHTML = result.toString();
  }
  
  function difference() {
    let firstNumber = document.getElementById('firstNumber').value;
    let secondNumber = document.getElementById('secondNumber').value;
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    let result = firstNumber - secondNumber;
    document.querySelector('span').innerHTML = result.toString();
  }
  
  function product() {
    let firstNumber = document.getElementById('firstNumber').value;
    let secondNumber = document.getElementById('secondNumber').value;
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    let result = firstNumber * secondNumber;
    document.querySelector('span').innerHTML = result.toString();
  }
  
  function quotient() {
    let firstNumber = document.getElementById('firstNumber').value;
    let secondNumber = document.getElementById('secondNumber').value;
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    let result = firstNumber / secondNumber;
    document.querySelector('span').innerHTML = result.toString();
  }
  
  function somethingElse() {
    document.querySelector('span').innerHTML = 'Wrong operation!';
  }
  
  function operation() {
    let operation = document.getElementById('operation').value;
  
    switch (operation) {
      case '+':
        return sum();
  
      case '-':
        return difference();
  
      case '*':
        return product();
  
      case '/':
        return quotient();
  
      default:
        return somethingElse();
    }
  }