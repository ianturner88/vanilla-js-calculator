const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalButtons = document.querySelectorAll('[data-equals]');
const deleteButton = document.querySelectorAll('[data-delete]');
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
    this.operation = '';
  }

  renderDisplay() {}

  equals() {}

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
    // activated when the DELETE button is selected
    this.currentOperand = this.currentOperand.slice(0, -1);
  }

  operations(operationType) {
    // activated when '+', '-', '÷', or 'x' is hit
    // transfer the current operand to the previous operand once a math operation is selected
    this.previousOperand = this.currentOperand;
    this.currentOperand = '';
    // store the operation to be preformed
    this.operation = operationType;
  }
}

const calculator = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement
);

numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText);
  });
});

operationButtons.forEach((button) => {
  button.addEventListener('click', () => {
    calculator.operations(button.innerText);
  });
});

deleteButton.forEach((button) => {
  button.addEventListener('click', () => {
    calculator.delete();
  });
});

equalButtons.forEach((button) => {
  button.addEventListener('click', () => {});
});
