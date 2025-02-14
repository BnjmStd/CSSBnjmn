// ECMAScript 2023
// --> findlast y findlastIndex
// --> Encuentra el último elemento de un array que cumple una condición

// ✖️ muta el array original, toreversed también
const array = [1, 2, 3, 4, 5, 6]
numbers.reverse().find(n => n % 2 == 0)

// usar bucle al revés tambien sirve poco optimo
for (let i = numbers.length - 1; i >= 0; i--) {
    if (numbers[i] % 2 == 0) {
        console.log(numbers[i])
        break
    }
}

// new
numbers.findLast(n => n % 2 == 0)
numbers.findLastIndex(n => n % 2 == 0)

const people = [
    {
        name: 'John', age: 30
    },
    {
        name: 'xxx', age: 18
    },
    {
        name: 'zzz', age: 12
    }
]

people.findLast(person => person.age < 40)

