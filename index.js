#! /usr/bin/env node
import inquirer from "inquirer";
let finalAnswer = 0;
const answer = await inquirer.prompt([
    {
        message: "Enter first number",
        type: "number",
        name: "firstNumber"
    },
    {
        message: "Enter second number",
        type: "number",
        name: "secondNumber"
    },
    {
        message: "Select one of the operator to perform action",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"]
    }
]);
if (answer.operator === "Addition") {
    finalAnswer = answer.firstNumber + answer.secondNumber;
}
else if (answer.operator === "Subtraction") {
    finalAnswer = answer.firstNumber - answer.secondNumber;
}
else if (answer.operator === "Multiplication") {
    finalAnswer = answer.firstNumber * answer.secondNumber;
}
else if (answer.operator === "Division") {
    finalAnswer = answer.firstNumber / answer.secondNumber;
}
else {
    console.log("Please select valid operator");
}
// console.log(answer);
console.log(finalAnswer);
