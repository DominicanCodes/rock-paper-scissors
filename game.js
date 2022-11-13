const options = ['rock', 'paper', 'scissors'];
const winMsg = 'You Win!', loseMsg = 'You Lose', drawMsg = 'Draw'
let gamesPlayed=0, gamesWon=0, gamesLost=0;
let userChoice, opChoice, outcome

function setUp() {
    let selection = parseInt(prompt('Choose your weapon:' + showOptions()))

    if (selection < 0 || selection > options.length)
        return 0

    return selection
}

function showOptions() {
    let output = '\n'

    for (opt=0;opt<options.length; opt++)
        output += `${opt+1}: ${options[opt]}\n`

        return output + '0: Exit'
}

function getRandomGuess() {
    return parseInt((Math.random() * options.length)+1)
}

function checkWin(userChoice, opChoice) {

    userChoice = (userChoice === opChoice) ? 0 : userChoice

    switch (userChoice) {
        case 1: 
            return (opChoice !== 2) 
        case 2:
            return (opChoice !== 3) 
        case 3:
            return (opChoice !== 1)
        default:
            return null;
    }
}

function showStats(outcome) {
    return `Games won: ${gamesWon} | Games lost: ${gamesLost}`
            // + `\t ${(gamesWon/gamesLost)*100}`  
}

function formatContent(str, ) {
    let content = str
                + '\n*********************************'
    console.log(content)
    alert(content)
}

//START GAME
userChoice = setUp();

while (userChoice !== 0) {
    gamesPlayed++

    opChoice = getRandomGuess()

    outcome = checkWin(userChoice, opChoice) 

    // alert(`${gamesPlayed} : ${gamesWon} : ${gamesLost}`)

    switch (outcome) {
        case true:
            gamesWon++;
            outcome=winMsg;
            break;
        case false:
            gamesLost++;
            outcome=loseMsg;
            break;
        case null:
            outcome=drawMsg;
            break;
    }

    formatContent(`Your choice: ${options[userChoice-1]}`
                + `\nOpponent choice: ${options[opChoice-1]}`
                + `\n--------------------------------\n${outcome}`)

    userChoice = setUp()
}

console.log(showStats(outcome))
console.log ('************GAME OVER************')