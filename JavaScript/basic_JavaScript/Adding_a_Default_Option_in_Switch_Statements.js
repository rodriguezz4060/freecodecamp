/*Write a switch statement to set answer for the following conditions:
a - apple
b - bird
c - cat
default - stuff*/

function switchOfStuff(val) {
    let answer = "";
    // Змініть код лише під цим рядком
    switch (val) {
        case 'a':
            answer = 'apple';
            break;
        case 'b':
            answer = 'bird';
            break;
        case 'c':
            answer = 'cat';
            break;
        default:
            answer = 'stuff';
    }

    // Змініть код лише над цим рядком
    return answer;
}

switchOfStuff(1);

