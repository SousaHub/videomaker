
function start() {
    const content = {}

    content.searchTerm = askAndReturnSearchTerm()

    function askAndReturnSearchTerm() {
        return question('Type a Wikipedia search term: ')
    }

    console.log(content)
}

start()