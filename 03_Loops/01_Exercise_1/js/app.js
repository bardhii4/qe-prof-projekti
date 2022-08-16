const number = 5;
let factorialNum = 1;

for (let i = 1; i <= number; i++) {
	factorialNum *= i;
}

console.log(`The factorial of ${number} is ${factorialNum}.`);
