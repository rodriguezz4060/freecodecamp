/*
Write a function nextInLine which takes an array (arr) and a number (item) as arguments.
Add the number to the end of the array, then remove the first element of the array.
The nextInLine function should then return the element that was removed.
*/

function nextInLine(arr, item) {
    // Змініть код лише під цим рядком
    arr.push(item);
    var item = arr.shift();
    return item;
    // Змініть код лише над цим рядком
}

// Налаштування
const testArr = [1, 2, 3, 4, 5];

// Відобразити код
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));