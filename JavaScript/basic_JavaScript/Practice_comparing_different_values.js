/*The compareEquality function in the editor compares two values using the
equality operator. Modify the function so that it returns the string Equal
only when the values are strictly equal.*/

// Налаштування
function compareEquality(a, b) {
    if (a === b) { // Змініть цей рядок
        return "Equal";
    }
    return "Not Equal";
}

compareEquality(10, "10");