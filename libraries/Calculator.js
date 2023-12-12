const Logger = require("../libraries/Logger");

class Calculator {
  constructor() {
    this.id = this.generateRandomID(); // Generate a unique random ID for each calculator instance
  }

  generateRandomID() {
    // Generate a random ID between 1 and 100 for the calculator instance
    return Math.floor(Math.random() * 100) + 1;
  }

  #log = (value) => {
    const newLog = new Logger(this.id);
    newLog.logMessage(value);
  };

  // Perform addition of two numbers
  add(num1, num2) {
    const value = num1 + num2;
    this.#log(value);
    return value;
  }

  // Perform subtraction of two numbers
  subtract(num1, num2) {
    const value = num1 - num2;
    this.#log(value);
    return value;
  }

  // Perform multiplication of two numbers
  multiply(num1, num2) {
    const value = num1 * num2;
    this.#log(value);
    return value;
  }

  // Perform division of two numbers
  divide(num1, num2) {
    if (num2 === 0) {
      throw new Error("Division by zero is not allowed");
    }
    const value = num1 / num2;
    this.#log(value);
    return value;
  }
}

module.exports = Calculator;

