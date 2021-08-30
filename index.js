const readline = require('readline-sync')

function start() {
    const content = {}

    content.searchTerm = askAndReturnSearchTerm()
    content.prefix = askAndReturnPrefix()

    function askAndReturnSearchTerm() {
        return question('Type a Wikipedia search term: ')
    }

    function askAndReturnPrefix() {
        const prefixes = ['Who is', 'What is', 'The History Of']
        const selectedPrefixIndex = readline.keyInSelect(prefixe, 'Choose one option: ')

        console.log(selectedPrefixIndex)
    }

    console.log(content)
}

start()