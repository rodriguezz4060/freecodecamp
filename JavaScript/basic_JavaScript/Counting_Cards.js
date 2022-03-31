let count = 0;

function cc(card) {
    // Змініть код лише під цим рядком
    switch (card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count--;
            break;
    }

    if (count > 0) {
        return count + " Bet"
    } else {
        return count + " Hold"
    }
    // Змініть код лише над цим рядком
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

let count = 0;

function cc(card) {
    // Змініть код лише під цим рядком
    var kard = /[JQKA]/
    if (card >= 2 && card <= 6 ) {
        count++;
    } else if (card === 10 || kard.test(card)) {
        count--;
    }

    if (count > 0) {
        return count + " Bet"
    } else {
        return count + " Hold"
    }
    // Змініть код лише над цим рядком
}

cc(2); cc(3); cc(7); cc('K'); cc('A');



