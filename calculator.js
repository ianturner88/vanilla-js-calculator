const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-number]');
const equalButtons = document.querySelectorAll('[data-number]');
const deleteButtons = document.querySelectorAll('[data-number]');
const clearButtons = document.querySelectorAll('[data-number]');
const previousOperandTextElement = document.querySelectorAll('[data-number]');
const currentOperandTextElement = document.querySelectorAll('[data-number]');

class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperand = previousOperandTextElement;
    this.currentOperand = currentOperandTextElement;
    this.answer = '';
  }

  appendNumber(number) {
    // adds the last inputted digit to the current number
    this.currentOperand = this.currentOperand + number;
    console.log(this.currentOperand);
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

  add() {
    console.log('Add:');
    this.previousOperand = this.currentOperand;
    console.log(this.previousOperand);
    console.log(this.currentOperand);
  }

  operations(operationType) {
    console.log('Ding ding');
    console.log(operationType.innerText);
    switch (operationType) {
      case '+':
        add();
    }
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
