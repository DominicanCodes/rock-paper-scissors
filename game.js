console.log('Hello World')

let options = ['rock', 'paper', 'scissors'];

function setUp() {
    console.log('Choose your weapon:'
                + displayOptions())
}

function displayOptions() {
    let output = '\n'

    for (opt=0;opt<options.length; opt++)
        output += (opt+1) + ': ' + options[opt] + '\n'

        return output
}

setUp()