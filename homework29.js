// // Task 1

// function getData (url){
//     const result = fetch(url);
//     result.then(response => {
//         if(response.ok){
//             return response.json();
//         }
//         throw new Error(`Error: ${response.status}`);
//     })
//         .then(data => {
//             const arr = data.filter(i => i.title[0] === 'a');
//             console.log(arr);
//         })
//         .catch(error => console.log(error.message));
// }
// getData('https://jsonplaceholder.typicode.com/todos');

// // Task 2

// async function getData (url){
//     try{
//         const result = await fetch(url);
//         if (result.ok){
//             const response = await result.json();
//             const arr = response.filter(i => i.title[0] === 'a');
//             console.log(arr);
//         } else {
//             throw new Error(`Error: ${result.status}`);
//         }
//     } catch (error){
//         console.error(error.massege);
//     }
// }
// getData('https://jsonplaceholder.typicode.com/todos');

// // Task 3

// async function getData(url) {
//     try {
//         const result = await fetch(url);
//         if (!result.ok) {
//             throw new Error(`Error: ${result.status}`);
//         } else {
//             const response = await result.json();
//             const arrA = response.filter(a => a.title[0] === 'a');
//             const arrAB = arrA.filter(ab => ab.title[1] === 'b');

//             const userA = document.querySelector('.user-a');
//             const userAB = document.querySelector('.user-ab');

//             userA.innerHTML = arrA.map(a => JSON.stringify(a)).join('<br>');
//             userAB.innerHTML = arrAB.map(ab => JSON.stringify(ab)).join('<br>');
//         }
//     } catch (error) {
//         console.error(error.message);
//     }
// } 
// getData('https://jsonplaceholder.typicode.com/todos');

// // Task 4

const userA = document.querySelector('.user-a');
const userAB = document.querySelector('.user-ab');
const addButtonA = document.querySelector('.add-a');
const addButtonAB = document.querySelector('.add-ab');
const addButtonAll = document.querySelector('.add-all');

addButtonA.addEventListener('click', () => {
    getDataA('https://jsonplaceholder.typicode.com/todos')
    userA.innerHTML = '';
    userAB.innerHTML = '';
});

async function getDataA(url) {
    try {
        const result = await fetch(url);
        if (!result.ok) {
            throw new Error(`Error: ${result.status}`);
        } else {
            const response = await result.json();
            const arrA = response.filter(a => a.title[0] === 'a');
            userA.innerHTML = arrA.map(a => JSON.stringify(a)).join('<br>');
        } 
    } catch (e) {
        console.log(e.message);
    }
}

addButtonAB.addEventListener('click', () => {
    getDataAB('https://jsonplaceholder.typicode.com/todos')
    userA.innerHTML = '';
    userAB.innerHTML = '';
});

async function getDataAB(url) {
    try {
        const result = await fetch(url);
        if (!result.ok) {
            throw new Error(`Error: ${result.status}`);
        } else {
            const response = await result.json();
            const arrAB = response.filter(ab => ab.title[0] === 'a' && ab.title[1] === 'b');
            userAB.innerHTML = arrAB.map(ab => JSON.stringify(ab)).join('<br>');
        } 
    } catch (e) {
        console.log(e.message);
    }
}

addButtonAll.addEventListener('click', () => {
    getDataAll('https://jsonplaceholder.typicode.com/todos')
    userA.innerHTML = '';
    userAB.innerHTML = '';
});

async function getDataAll(url) {
    try {
        const result = await fetch(url);
        if (!result.ok) {
            throw new Error(`Error: ${result.status}`);
        } else {
            const response = await result.json();

            const arrA = response.filter(a => a.title[0] === 'a');
            userA.innerHTML = arrA.map(a => JSON.stringify(a)).join('<br>');
            const arrAB = response.filter(ab => ab.title[0] === 'a' && ab.title[1] === 'b');
            userAB.innerHTML = arrAB.map(ab => JSON.stringify(ab)).join('<br>');
        } 
    } catch (e) {
            console.log(e.message);
    }
}






