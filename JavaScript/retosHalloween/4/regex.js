const findTheKiller = (whisper, suspects) => {

    const endsWithSymbols = whisper.endsWith('$')

    const baseWhisper = endsWithSymbols 
        ? whisper.slice(0, -1) 
        : whisper
    
    const wildCardWhisper = baseWhisper.replace(/~/g, '.') // replace all '~' with '.' (replaceAll() is not supported in all browsers)

    const basePattern = `^${wildCardWhisper}`
    const endPattern = endsWithSymbols ? '$' : '.*$'

    const completePattern = `${basePattern}${endPattern}`

    const regex = new RegExp(completePattern, 'i')

    const matchingSuspects = suspects.filter(suspect => regex.test(suspect))

}

const whisper = 'd~~~~~a'
const suspects = ['dracula', 'Freddy Krueger', 'Jason Voorhees', 'Michael Myers']

const whisperr = '~r~dd$'
const suspectss = ['Freddy', 'Michael', 'Jason', 'dracula', 'Freddier', 'Freddiest']

findTheKiller(whisper, suspects)
