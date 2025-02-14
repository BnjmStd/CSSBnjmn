/* 
copias superficiales, de primer nivel
--> array by copy

*toReversed()
*toSorted()
*toSpliced()
*with()

*/


/* TOREVERSED */
const original = [1, 2, 3]

// da la vuelta al array pero tambien muta el array original
const reversed = original.reverse()

// ejemplo
const reversed2 = original.toReversed()

const users = [
    { id: 1, name: 'midu', fav: { food: '🍌' } },
    { id: 2, name: 'benja', fav: { food: '🍌' } },
    { id: 3, name: 'vicki', fav: { food: '🍌' } }
]

const deepCopy = structuredClone(users)
const reversedUsers =  deepCopy.toReversed()


// TOSORTED
const numbers = [3, 8, 2, 4, 10]

const sortedNumbers = numbers.toSorted((a, b) => a - b)


const name =[{ name: 'Miguel' }, { name: 'Ana' }, { name: 'Ángela' }]

const sortedNames = name.toSorted((a, b) => {
    return a.name.localeCompare(b.name)
})


// TOSPLICE

const dogs = ['🐶', '🦮', '🐕‍🦺']

dogs.splice(1, 0, '🌭') // añadir entre sin eliminar ninguno
// devuelve los perritos que elimino y muta el array original

const index = 2
const deleteCount = 1
const result = dogs.toSpliced(index, deleteCount, '😺')


// WITH

// viene arreglar esto:

const lot = [1, 2, 3]
lot[2] = 3

// modifica el original
const array = ['🦾', '🫠', '🐻']
const indexToChange = 1

const resultArrayWith = array.with(indexToChange, '🍌')


const todos = [
    {
        id: 1,
        title: 'By mil',
        completed: false
    },
    {
        id: 2,
        title: 'By mil',
        completed: false
    },
    {
        id: 3,
        title: 'By mil',
        completed: false
    }
]

const idToToggle = 2

// ✖️ pq muta el array original
/*
const todoToChange = todos.find(todo => todo.id == idToToggle)
todoToChange.completed = !todoToChange.completed
*/

/* Bien ✅ para no mutar el original
const resultWith = todos.map(todo => {
    if ( todo.id === idToToggle ) {
        return { ...todo, completed: !todo.completed }
    }
    return todo
})
*/

// ✅ con .with() declarativa

const indexTodo = todos.findIndex(todo =>  todo.id == idToToggle)
const originalTodo = todos.at(indexTodo)
const resultTodo = todos.with(indexTodo, {
    ...originalTodo, completed: !originalTodo.completed
})