/*Change the chained if/else if statements into a switch statement.*/

function chainToSwitch(val) {
    let answer = "";
    // Змініть код лише під цим рядком
    switch(val) {
        case 'bob':
            answer = 'Marley';
            break;
        case 42:
            answer ='The Answer';
            break;
        case 1:
            answer = 'There is no #1';
            break;
        case 99:
            answer = 'Missed me by this much!'
            break;
        case 7:
            answer = 'Ate Nine';
            break;
    }
    // Змініть код лише над цим рядком
    return answer;
}

chainToSwitch(7);
