function findTheKiller(whisper, suspects) {
    const normalizedWhisper = whisper
        .toLowerCase()

    const isExactMatch = whisper.endsWith('$') // devuelve true si la palabra termina con '$'

    const matchesPattern = (suspect) => {

        const whisperToUse = isExactMatch ?
            normalizedWhisper.slice(0, -1) :
            normalizedWhisper

        const normalizedSuspect = suspect.toLowerCase()


        if (
            isExactMatch &&
            whisperToUse.length !== normalizedSuspect) {
            return false
        }

        return [...normalizedWhisper].every((char, index) => {
            return char === '~' || char === normalizedSuspect[index]
        })


    }

    const matchingSuspects = suspects.filter(matchesPattern)

    return matchingSuspects.join(',')

}

const whisper = 'd~~~~~a'
const suspects = ['dracula', 'Freddy Krueger', 'Jason Voorhees', 'Michael Myers']

const whisperr = '~r~dd$'
const suspectss = ['Freddy', 'Michael', 'Jason', 'dracula', 'Freddier', 'Freddiest']

findTheKiller(whisper, suspects)
