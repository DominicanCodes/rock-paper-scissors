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

function play(choice) {
    opChoice = getRandomGuess()
    // alert('Play: Choice - ' + choice + '\tOP: ' + opChoice)
    switch (checkWin(choice, opChoice)) {
        case true:
            gamesWon++
            return winMsg
        case false:
            gamesLost++
            return loseMsg
        case null:
            return drawMsg
    }
}

function checkWin(choice1, choice2) {
    
    choice1 = (choice1 === choice2) ? 0 : choice1
    // alert('Check: '+choice1)
    switch (choice1) {
        case 1: 
            return (choice2 !== 2)
        case 2:
            return (choice2 !== 3)
        case 3:
            return (choice2 !== 1)
        default:
            return null
    }
}

function showStats(outcome) {
    return `Games won: ${gamesWon} | Games lost: ${gamesLost}`
            // + `\t ${(gamesWon/gamesLost)*100}`  
}

function formatContent(str) {
    let content = str
                + '\n*********************************'
    console.log(content)
    alert(content)
}

//START GAME
userChoice = setUp();

while (userChoice !== 0) {
    gamesPlayed++

    outcome = play(userChoice) 

    // alert(`${gamesPlayed} : ${gamesWon} : ${gamesLost}`)

    formatContent(`Your choice: ${options[userChoice-1]}`
                + `\nOpponent choice: ${options[opChoice-1]}`
                + `\n--------------------------------\n${outcome}`)

    userChoice = setUp()
}

console.log(showStats(outcome))
console.log ('************GAME OVER************')