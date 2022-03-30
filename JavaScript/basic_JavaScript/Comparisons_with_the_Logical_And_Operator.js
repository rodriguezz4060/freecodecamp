/*Replace the two if statements with one statement, using the && operator,
 which will return the string Yes if val is less than or equal to 50 and greater than or equal to 25.
 Otherwise, will return the string No.*/

function testLogicalAnd(val) {
    // Змініть код лише під цим рядком

    if (val <= 50 && val >= 25) {
        return "Yes";
    }

    // Змініть код лише над цим рядком
    return "No";
}

testLogicalAnd(10);