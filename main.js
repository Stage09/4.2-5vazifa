// 1-masala

// let sum = 0;
// let number = 1; 

// while (number <= 10) {
//     sum += number; 
//     number += 2; 
// }

// console.log("Toq sonlarning yig'indisi:", sum);



// 2-masala

let num1 = parseFloat(prompt("Birinchi sonni kiriting:"));
let num2 = parseFloat(prompt("Ikkinchi sonni kiriting:"));
let operation = prompt("Amalni tanlang (+, -, *, /):");

let result;

if (operation === "+") {
    result = num1 + num2;
} else if (operation === "-") {
    result = num1 - num2;
} else if (operation === "*") {
    result = num1 * num2;
} else if (operation === "/") {
    if (num2 === 0) {
        result = "0 ga bo'lish mumkin emas!";
    } else {
        result = num1 / num2;
    }
} else {
    result = "Noto'g'ri amal tanlandi!";
}

console.log("Natija: " + result);
