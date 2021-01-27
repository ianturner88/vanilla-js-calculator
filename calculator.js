const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalButtons = document.querySelectorAll('[data-equals]');
const deleteButtons = document.querySelectorAll('[data-delete]');
const clearButtons = document.querySelectorAll('[data-clear]');
const previousOperandTextElement = document.querySelectorAll(
  '[data-previous-operand]'
);
const currentOperandTextElement = document.querySelectorAll(
  '[data-current-operand]'
);

class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperand = '';
    this.currentOperand = '';
    this.answer = '';
  }

  appendNumber(number) {
    // adds the last inputted digit to the current number
    this.currentOperand = this.currentOperand + number;
  }

  wipeClean() {
    // resets the calculator
    // activated when the CLEAR button is selected
    this.previousOperand = '';
    this.currentOperand = '';
  }

  delete() {
    // deletes the last character of the current operand
    this.currentOperand = this.currentOperand.substring(
      0,
      this.currentOperand - 1
    );
  }

  operations(operationType) {
    this.previousOperand = this.currentOperand;
    this.currentOperand = '';
  }
}

const calculator = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement
);

numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    console.log('Number: ' + button.innerText);
    calculator.appendNumber(button.innerText);
  });
});

operationButtons.forEach((button) => {
  button.addEventListener('click', () => {
    console.log('Operation: ' + button.innerText);
    calculator.operations(button.innerText);
  });
});
