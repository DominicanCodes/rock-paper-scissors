const options = ['rock', 'paper', 'scissors'];
const winMsg = 'You Win!', loseMsg = 'You Lose', drawMsg = 'Draw'
let gamesPlayed=0, gamesWon=0, gamesLost=0;
let userChoice, opChoice, outcome

function play(choice) {
    opChoice = getRandomGuess()
    // alert('Play: Choice - ' + choice + '\tOP: ' + opChoice)
    switch (checkWin(choice, opChoice)) {
        case true:
            gamesWon++
            return winMsg + ` ${options[choice-1]} beats ${options[opChoice-1]}.`
        case false:
            gamesLost++
            return loseMsg + `, ${options[opChoice-1]} beats ${options[choice-1]}.`
        case null:
            return drawMsg + `, ${options[choice-1]} and ${options[opChoice-1]} cancel out.`
    }
}

function getRandomGuess() {
    return parseInt((Math.random() * options.length)+1)
}

function checkWin(choice1, choice2) {

    choice1 = formatSelection(choice1)    
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

function formatSelection(selection) {
    isNaN(selection) ? selection = wordToNum(selection)
        : selection = parseInt(selection)
    
    if (selection < 0 || selection > options.length)
        return 0

    return selection
}

function wordToNum(choice) {
    switch (choice.toLowerCase()) {
        case 'rock':
            return 1
        case 'paper':
            return 2
        case 'scissors':
            return 3
        default:
            return 0
    }
}

function showStats(outcome) {
    let winLossRatio = (gamesWon/gamesLost).toFixed(2)
    return gamesPlayed===0 ? ''
            :gamesLost+gamesWon===0 ? `You managed to maintain the `
                                    + `\nstalemate for ${gamesPlayed} game(s).`
            : gamesLost===0 ? `\tWOW you won all ${gamesWon} game(s)!`
                                + `\n\t(No draws counted here.)`
            : gamesWon===0 ? `You lost every single game. :(`
            : `Game(s) won: ${gamesWon} | Game(s) lost: ${gamesLost}`
            + `\n\tWin/Loss Ratio: ${winLossRatio}`  
}

// NEW GAME GUI
const choices = document.querySelectorAll(".choices div");
console.log(choices);

choices.forEach(choice => choice.addEventListener('click', playRound));
function playRound(e) {
    userChoice = e.target.id
    userChoice = wordToNum(userChoice)
    console.log(play(userChoice));
}

// OLD GAME --------------------------------------------------------------------
function showOptions() {
    let output = '\n'

    for (opt=0;opt<options.length; opt++)
        output += `${opt+1}: ${options[opt]}\n`

    return output + '0: Exit'
}

function formatContent(str) {
    let content = str
                + '\n*********************************'
    console.log(content)
    alert(content)
}

//START GAME OLD
function start_game_old() {
do {
    userChoice = prompt('Choose your weapon:' + showOptions());
    gamesPlayed++

    outcome = play(userChoice) 

    // alert(`${gamesPlayed} : ${gamesWon} : ${gamesLost}`)

    formatContent(`Your choice: ${options[userChoice-1]}`
                + `\nOpponent choice: ${options[opChoice-1]}`
                + `\n--------------------------------\n${outcome}`)
} while (userChoice !== 0)

console.log(showStats(outcome))
console.log ('************GAME OVER************')
}

// start_game_old()