/*
The editor has two console.logs to help you see what is happening.
Check the console as you code to see how it changes. Declare a local variable myVar inside
myLocalScope and run the tests.
Note: The console will still display ReferenceError: myVar is not defined, but this will
not cause the tests to fail.
*/

function myLocalScope() {
    // Змініть код лише під цим рядком
    const myVar = 1;
    console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Запустіть та перевірте консоль
// myVar не визначений за межеми myLocalScope
console.log('outside myLocalScope', myVar);