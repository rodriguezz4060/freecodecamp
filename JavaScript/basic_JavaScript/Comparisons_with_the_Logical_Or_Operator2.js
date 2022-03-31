/*Combine the two if statements into one statement which returns the string Outside
if val is not between 10 and 20, inclusive. Otherwise, return the string Inside.*/

function testLogicalOr(val) {
    // Змініть код лише під цим рядком

    if (val > 20 || val < 10) {
        return "Outside";
    }

    // Змініть код лише над цим рядком
    return "Inside";
}

testLogicalOr(15);