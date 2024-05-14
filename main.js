#! /usr/bin/env node
import inquirer from "inquirer";
let userName = await inquirer.prompt([
    {
        name: "names",
        type: "input",
        message: "enter your name:"
    }
]);
console.log("lets start the quiz. (Gernal Knowledge Questions):");
const quiz = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: "Q1.What is the hardest known natural material on earth?",
        choices: ["A)Iron", "B)Diamond", "C)Graphite", "D)Granite"],
    },
    {
        name: "question_2",
        type: "list",
        message: "Q2.Which chemical element has the symbol'k'on the periodic table?",
        choices: ["A)Potassium", "B)Krypton", "C)Kallium", "D)kryptonite"],
    },
    {
        name: "question_3",
        type: "list",
        message: "Q3.What is the currency of the United Kingdom?",
        choices: ["A)Dollar", "B)Euro", "C)Pound Sterling", "D)Yen"],
    },
    {
        name: "question_4",
        type: "list",
        message: "Q4.Which planet is known as the Red Planet?",
        choices: ["A)Mars", "B)Jupitor", "C)Venus", "D)Saturn"],
    },
    {
        name: "question_5",
        type: "list",
        message: "Q5.What is the largest ocean in the world?",
        choices: [
            "A)Arctic Ocean",
            "B)Atlantic Ocean",
            "C)Pacific Ocean",
            "D)Indian Ocean",
        ],
    },
]);
let score = 0;
switch (quiz.question_1) {
    case "B)Diamond":
        console.log("1. Correct!");
        ++score;
        break;
    default:
        console.log("1. Incorrect!");
}
switch (quiz.question_2) {
    case "A)Potassium":
        console.log("2. Correct!");
        ++score;
        break;
    default:
        console.log("2. Incorrect!");
}
switch (quiz.question_3) {
    case "C)Pound Sterling":
        console.log("3. Correct!");
        ++score;
        break;
    default:
        console.log("3. Incorrect!");
}
switch (quiz.question_4) {
    case "A)Mars":
        console.log("4. Correct!");
        ++score;
        break;
    default:
        console.log("4. Incorrect!");
}
switch (quiz.question_5) {
    case "C)Pacific Ocean":
        console.log("5. Correct!");
        ++score;
        break;
    default:
        console.log("5. Incorrect!");
}
console.log(`${userName.names} your score is: ${score}`);
