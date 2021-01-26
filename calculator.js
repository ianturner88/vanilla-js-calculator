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
  }

  refresh() {
    // resets the calculator
    // activated when the CLEAR button is selected
    this.previousOperand();
    this.currentOperand();
  }

  delete() {
    // deletes the last number / period of the current operand
  }
}

const calculator = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement
);
