/*Create a function called random Range that takes a range myMin and myMax and
returns a random whole number that's greater than or equal to myMin, and is less than or equal to
 myMax, inclusive.*/

function randomRange(myMin, myMax) {
    // Змініть код лише під цим рядком
    return Math.floor(Math.random()*(myMax - myMin+1)) + myMin;
    // Змініть код лише над цим рядком
}