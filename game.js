let options = ['rock', 'paper', 'scissors'];

function setUp() {
    let userChoice = parseInt(prompt('Choose your weapon:' + displayOptions()))

    if (userChoice < 0 || userChoice > options.length)
        return 0

    return userChoice
}

function displayOptions() {
    let output = '\n'

    for (opt=0;opt<options.length; opt++)
        output += (opt+1) + ': ' + options[opt] + '\n'

        return output + '0: Exit'
}

function getRandomGuess() {
    return parseInt((Math.random() * options.length)+1)
}

function checkWin(userChoice, opChoice) {

    userChoice = (userChoice === opChoice) ? 0 : userChoice

    switch (userChoice) {
        case 1: 
            return (opChoice !== 2) ? 'You Win!' : 'You Lose'
        case 2:
            return (opChoice !== 3) ? 'You Win!' : 'You Lose'
        case 3:
            return (opChoice !== 1) ? 'You Win!' : 'You Lose'
        default:
            return 'Draw'
    }
}

function displayContent(str) {
    let content = str
                + '\n*********************************'
    console.log(content)
    alert(content)
}

let userChoice = setUp()

while (userChoice !== 0) {
    let opChoice = getRandomGuess()

    displayContent('Your choice: ' + options[userChoice-1]
                   + '\nOpponent choice: ' + options[opChoice-1]
                   + '\n--------------------------------\n'
                   + checkWin(userChoice, opChoice))

    userChoice = setUp()
}

console.log ('************GAME OVER************')