const promises = [

    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json()),


    fetch('https://jsonplaceholder.typicode.com/todos/')
        .then(res => res.json()),


    fetch('https://jsonplaceholder.typicode.com/todos/3')
        .then(res => res.json())
]

/* método */

Promise.allSettled(promises)
    .then(data => console.log(data))