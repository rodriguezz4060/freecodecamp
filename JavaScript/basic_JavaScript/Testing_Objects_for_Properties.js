/*Modify the function checkObj to test if an object passed to the function (obj) contains a specific
property (checkProp). If the property is found, return that property's value. If not, return "Not Found".*/

function checkObj(obj, checkProp) {
    // Змініть код лише під цим рядком
    if (obj.hasOwnProperty(checkProp)) {
        return obj[checkProp];
    } else {
        return "Not Found";
    }
    // Змініть код лише над цим рядком
}