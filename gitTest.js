class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    }
}

const calculator = new Calculator();
console.log(calculator.add(4, 3));      // Output: 8
console.log(calculator.subtract(5, 3)); // Output: 2
console.log(calculator.multiply(5, 6)); // output 30 
console.log(calculator.divide(10, 2));  // Output: 5







// hhhhhh

  // exercise 1
let celsius = 60;
let fahrenheit = (celsius * 9/5) + 32;
console.log(`${celsius} Celsius is equal to ${fahrenheit} Fahrenheit`);
    


let factorial = 1;
let number = 4; // change this value for different results
for(let i = 1; i <= number; i++){
    factorial *= i;
}
console.log(`The factorial of ${number} is ${factorial}`);
