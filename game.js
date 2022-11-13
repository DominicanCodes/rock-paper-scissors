let options = ['rock', 'paper', 'scissors'];

function setUp() {
    // return parseInt(prompt('Choose your weapon:' + displayOptions()))
    return 1
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

let userChoice = setUp()

console.log('Your choice: ' + userChoice)

let opChoice = getRandomGuess()

console.log('Opponent choice: ' + opChoice)