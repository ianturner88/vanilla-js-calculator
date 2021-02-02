testVar = 4;
placeHolder = 'Toronto';

const mathOperations = Object.freeze({
  // enums for the math operations
  ADD: '+',
  SUBTRACT: '-',
  MULTIPLY: 'x',
  DIVIDE: '/',
  DECIMAL: '.',
});

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const deleteButton = document.querySelector('[data-delete]');
const clearButton = document.querySelector('[data-clear]');
const equalButton = document.querySelector('[data-equal]');
const previousOperandTextElement = document.querySelector(
  '[data-previous-operand]'
);
const currentOperandTextElement = document.querySelector(
  '[data-current-operand]'
);

class Calculator {
  constructor() {
    this.previousOperand = '';
    this.currentOperand = '';
    this.answer = '';
    this.operation = '';
  }

  renderDisplay() {
    // outputs the operands to the screen
    currentOperandTextElement.innerText = `${this.currentOperand}`;
    previousOperandTextElement.innerText = `${this.previousOperand}`;
  }

  maxDecimalLength() {
    // determines the maximum number of decimals allowed
    var previousOperandNumberDecimals = 0;
    var currentOperandNumberDecimals = 0;

    // determines the max number of decimals allowed
    const arrPreviousOperand = this.previousOperand.split('.');
    const arrCurrentOperand = this.currentOperand.split('.');

    if (arrPreviousOperand.length === 2) {
      // activated only if the input number has a decimal point
      previousOperandNumberDecimals = arrPreviousOperand[1].length;
    }

    if (arrCurrentOperand.length === 2) {
      // activated only if the input number has a decimal point
      currentOperandNumberDecimals = arrCurrentOperand[1].length;
    }

    if (previousOperandNumberDecimals > currentOperandNumberDecimals) {
      // ensures the max amount is identified
      currentOperandNumberDecimals = previousOperandNumberDecimals;
    }

    // the most allowable number of decimals is returned
    return currentOperandNumberDecimals;
  }

  equals() {
    const numberOfDecimals = calculator.maxDecimalLength();

    // convert the string to a number
    this.currentOperand = parseFloat(this.currentOperand);
    this.previousOperand = parseFloat(this.previousOperand);

    // computes the user requested mathematical operation
    switch (this.operation) {
      case mathOperations.ADD:
        // adds the 2 operands together
        this.answer = this.currentOperand + this.previousOperand;
        break;

      case mathOperations.SUBTRACT:
        // subtracts the 2 operands
        this.answer =
          parseInt(this.previousOperand, 10) -
          parseInt(this.currentOperand, 10);
        break;

      case mathOperations.MULTIPLY:
        // multiplies the 2 operands
        this.answer =
          parseInt(this.currentOperand, 10) *
          parseInt(this.previousOperand, 10);
        break;

      case mathOperations.DIVIDE:
        // divides the 2 operands
        this.answer =
          parseInt(this.previousOperand, 10) /
          parseInt(this.currentOperand, 10);
        break;
    }

    // convert both numerical values to strings
    this.currentOperand = this.currentOperand.toString();
    this.previousOperand = this.previousOperand.toString();

    // allows the user to see what the operands were and the mathematical operation that was preformed
    this.previousOperand =
      this.previousOperand + ' ' + this.operation + ' ' + this.currentOperand;

    // output the sum to the screen
    this.currentOperand = this.answer;

    calculator.renderDisplay();
  }

  appendNumber(number) {
    // ensures only 1 decimal per number
    if (number === '.' && this.currentOperand.includes('.') === true) return;

    // adds the last inputted digit to the current number
    this.currentOperand = this.currentOperand + number;
    calculator.renderDisplay();
  }

  wipeClean() {
    // resets the calculator
    // activated when the CLEAR button is selected
    this.previousOperand = '';
    this.currentOperand = '';

    //update the screen
    calculator.renderDisplay();
  }

  delete() {
    // deletes the last character of the current operand
    // activated when the DELETE button is selected
    this.currentOperand = this.currentOperand.slice(0, -1);

    //update the screen
    calculator.renderDisplay();
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
  // stores the operation to be completed
  button.addEventListener('click', () => {
    calculator.operations(button.innerText);
  });
});

deleteButton.addEventListener('click', (e) => {
  // deletes the last digit or decimal entered
  calculator.delete();
});

equalButton.addEventListener('click', (e) => {
  // computes the desired mathematical operation
  calculator.equals();
});

clearButton.addEventListener('click', (e) => {
  // reset the current and previous operand
  calculator.wipeClean();
});
