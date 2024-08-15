// //Variables
// // console.log('Hello World'[10])
// // let str = 'David'
// // console.log(str(str.length - 1))
// // Modula % is how many times number will go into another
// // // var, let, and const are variable call upons. Var is outdated DO NOT USE!
// // let fullName = 'Josh Thompson'
// // const = temperature = 20
// // let planet = 'Earth'
// // temperature = temperature +2
// // console.log(temperature)
// let celsius = 10;
// let fahrenheit = celsius * 1.8 + 32
// // console.log (fahrenheit)
// let bool = '1' == 1
// // console.log(bool)
// == check if value is equal
// === check if value is equal and same type
// ! checks if value is not equal
// console.log(!bool )
// // CONDITIONALS
// let subscribed = false
// let loggedIn = true
// if (subscribed === true) {
//     console.log('show the video')
// }
// else if (loggedIn === true) {
//     console.log('tell the user to upgrade their subscription.')
// }
// else {
//     console.log('tell user to log into account')
// // }
// let cash = 50
// let price = 40
// if (cash > price) {
//     console.log(`You paid extra - here's ${cash - price} dollars change.`)
// }
// else if (cash === price) {
//     console.log("You paid the exact amount, have a nice day")
// }

// else {
//     console.log(`Not enough money - you still owe ${price - cash} dollars`)
// }

// && checks to see if both sides are equal (and)
// || checks to see if one of the operators are true. (or)
// ! checks opposite of boolean
// a falsy value is considered as false when converted to a Boolean.
// a truthy value is considered as true when converted to a Boolean.
// let cash = 50
// let price = 40
// let isStoreOpen = false

// if (cash >= price && !isStoreOpen) {
//     console.log('print the receipt')
// }
// falsy values that show false when converted include (undefined, null, NaN, 0, "", false)
// truthy examples are essentially everything other than the falsy values. (numbers, strings, brackets - empty arrays and values)
//  if a value is truthy or falsy you can check by using !! in the console
// let val = "Josh";

// if (val) {
//     console.log('truthy value', !!val)
// }
// else {
//     console.log("falsy value", !!val)
// }
// TERNARY OPERATORS
// a shortcut for an if else condition usable on 1 line
// isObese?'unhealthy':'healthy'
// let hot = ""

// hot ? console.log('weather is hot outside') : console.log('weather is cold')
// let subscribed = true
// let loggedIn = true

// let str = subscribed && loggedIn ? 'show the video' : 'hide the video'
// console.log(str)

// let cash = 50
// let price = 40
// let isStoreOpen = false

// // if (cash >= price && isStoreOpen) {
// //     console.log('Give receipt')
// // }
// // else {
// //     console.log('Do not give receipt')
// // }

// let str = cash >= price && isStoreOpen ? "Give Receipt" : "Do Not Give Receipt"

// console.log(str)

// LOOPS
// DRY = don't repeat yourself
// let count = 1;

// while (count <= 100) {
//     console.log(count)
//     count = count + 1;}
// for (let i = 0; i < 100; i++) {
//     console.log(i);
// }
// for loop set i to 0 (for (let i = 0 ;) i less than how many times we want to loop (i < 100;) incrememnt i by 1 (i++) { console.log (i)
// for (let i = 1; i <= 20; i++) {
// if (i % 3 === 0 && i % 5 === 0) {
//     console.log(`${i} -> Frontend Simplified`)
// }
// else if (i % 3 === 0) {
//     console.log(`${i} -> Frontend`)
// }
// else if (i % 5 === 0) {
//     console.log(`${i} -> Simplified`)
// }
// else
//     console.log(`${i} -> ${i}`)
// }
// const str = 'Frontend Simplified'
// for (let i = 0; i < str.length; i++) {
//     console.log(str [i])
// }

// FUNCTIONS
// a block of code designed to perform a particular task
// function welcomeToFES(firstName, lastName) {
//     console.log(`Welcome to FES, ${firstName} ${lastName}`)
// }
// welcomeToFES('Josh', 'Thompson')
// function fn() {
//     return 'my return'
//     console.log('my function')
// }
// fn();
// function sumOfTwoNumbers(num1, num2) {
//     return num1 / num2
// }
// console.log(sumOfTwoNumbers(10, 10));
// function convertCelsiusToFahnrenheit(num1) {
//     return num1 * 1.8 + 32
// }
// const convertCelsiusToFahnrenheit = (num1) => {
//     return num1 * 1.8 +32
// }
// console.log(convertCelsiusToFahnrenheit(0))
// console.log(convertCelsiusToFahnrenheit(10))
// console.log(convertCelsiusToFahnrenheit(30))

// ARRAYS
// let arr = [20,30,40,50,100]

// console.log(arr[0])
// console.log(arr[arr.length - 1])

// arr.push(200)
// console.log(arr)

// let newArr = arr.filter((element) => {
//     console.log(element)
//     if (element < 50) {
//         return true;
//     }
// })
// // one line version of above
// let newArr = arr.filter(element => element < 50)
// // console.log(newArr)
// let grades = ['A+', 'A', 'FAIL']

// // let newArr = grades.filter(element => element !== 'FAIL')
// // console.log(newArr)

// // let grades2 = ['FAIL', 'FAIL', 'B']

// // let newArr2 = grades2.filter(element => element !== 'FAIL')
// // console.log(newArr2)

// // let grades3 = ['FAIL']
// // let newArr3 = grades3.filter(element => element !== 'FAIL')
// // console.log(newArr3)
// let goodGrades = []
// for (let i = 0; i < grades.length; ++i) {
//     if (grades[i] !== 'FAIL') {
//         goodGrades.push(grades[i]);
//     }
// }
// console.log(goodGrades)

// let arr = [1, 4, 9, 16]
// let newArr = arr.map(element => undefined)
// console.log(newArr)

// let dollars = [1, 5, 10, 3];
// // // Short way
// // let cents = dollars.map(element => element * 100)
// // // Long way
// // let cents2 = dollars.map((element) => {
// // console.log(element)
// //     return element * 100
// // })
// let = cents = []
// for (let i = 0; i < dollars.length; ++i) {
//     cents.push(dollars[i] * 100)
// }
// console.log(cents)
// console.log(cents)
// console.log(cents2)

// OBJECTS
// Used to store multiple properties in one variable
// let users = [
//     {
//     username: 'Josh',
//     email: 'joshjthompson@yahoo.com',
//     password: 'test123',
//     subscriptionStatus: 'VIP',
//     discordId: 'Josh T1000',
//     lessonsCompleted: [0, 1],
// },
// {
//     username: 'David',
//     email: 'david@yahoo.com',
//     password: 'test123',
//     subscriptionStatus: 'VIP',
//     discordId: 'David T1000',
//     lessonsCompleted: [0, 1, 2, 3],
// },
// ]
// function login(email, password) {
//     for (let i = 0; i < users.length; ++i) {
//         if (users[i].email === email){
//             console.log(users[i]);
//             if (users[i].password === password) {
//                 console.log('log the user in - details are correct')
//             }
//             else {
//                 console.log('password is incorrect - try again')
//             }
//             return;
//         }
//     }
//     console.log('email does not exist in system')
// }

// login('david@yahoo.com', 'test123')

// Accessing tthe info
// user.username
// now treated like a string or array [] can be mapped and filtered.
// console.log(users[1].lessonsCompleted.map(elem => elem * 2));
// objects can also be arrays as above and individuals can be found within like an array.[0,1,2...]
// let users = [ 
// ]
// function register(user) {
//     users.push(user);
// }
// register({
//     username: "zen",
//     email: "zen@yahoo.com",
//     password: "zen123",
//     subscriptionStatus: "VIP",
//     discordId: "zen1",
//     lessonsCompleted: [0, 1, 2]
// });

// console.log(users)

// DOM Document Object Model
// allows you to access and change trhe styling and content of elements on your website.
// first way to access element
// console.log(document.querySelector('#title'))
// add defer to src js in index
// works with ID, classes or just selector like h1
// Best to use query selector

// second way to access element
// console.log(document.getElementById('title'))
// better practice if the element has an ID
// document.querySelector('#title').innerHTML += 'Frontend Simplified'
// // editting of inner HTML for the site itself. Changed Josh Thompson to Frontend Simplified.
// // += instead of = adds what you type in innerhtml to what already exists.
// // Changing CSS 
// document.querySelector('#title').style.color = 'blue'
// document.querySelector('#title').style.fontSize = '50px'

// function changeTitleToRed() {
//     document.querySelector('#title').style.color = 'blue' 
// }

// function toggleDarkMode() {
//     document.querySelector('body').classList.toggle('dark-theme')
// }