// Code your solutions in this file
// for (let age = 45; age > 43; age--) {
//     console.log(`I'am ${age}, and I have more than 76 business`)
//     debugger;
// }

const gifts = ['gronoudn', 'peaky', 'whate', 'le']
function wrappedGift(gifts) {
    for (let i = 0; i <= gifts.length; i++) {
        console.log(`the ${gifts[i]} got wrapped`)
        debugger
    }
    return gifts
}

wrappedGift(gifts)

// const message = []
// function writeCards(names, eventName) {
//     for (let i = 0; i <= names.length; i++) {
//         console.log(`Thank you ${names[i]} for your money, you got foolished on ${eventName} 🤣`)
//         debugger
//     }
//     return names;
// }

// writeCards(['sami', 'jami', 'whatever'], 'School')

// function inWhile(names, eventName) {
//     let i = 0;
//     while(i <= names.length) {
//         console.log(`Thank you ${names[i]} for your money, you got foolished on ${eventName} 🤣`)
//         i++
//     }
//     return names
// }

// inWhile(['sami', 'jami', 'whatever'], 'School')

function countDown(num) {
    let i = num;
    while(i >= 0) {
        console.log(i--)
    } 
    return i
}

countDown(4)