// const numForm = document.querySelector('#numForm')
// const numResult = document.querySelector('#result')
<<<<<<< HEAD

// numForm.addEventListener('submit', guessNumber(e))
//     e.preventDefault();
//     const userValue = Number(document.querySelector('#userNum').value)
//     const message = guessNumber(userValue);
//     numResult.textContent = message

const text = document.querySelector("#output-text")
const input = document.querySelector("number-input")
console.log("Hi")
function guessNumber(num){
    if (num === 7){
        return 'Correct Number!'
    } else if (num > 10){
        return 'Number must be between 1 and 10'
    } else if (typeof num !== 'number'){
        return 'Input must be a number!'
    } else if (num < 0){
        return 'Number must be positive'
=======

// numForm.addEventListener('submit', guessNumber(e))
//     e.preventDefault();
//     const userValue = Number(document.querySelector('#userNum').value)
//     const message = guessNumber(userValue);
//     numResult.textContent = message

const prompt=require("prompt-sync")({sigint:true})
let userInp = prompt("Enter a number between 1 and 10: ")

// function guessNumber(num){
if (userInp === 7){
        console.log('Correct Number!')
    } else if (userInp > 10){
        console.log('Number must be between 1 and 10')
    } else if (typeof userInp !== 'number'){
        console.log('Input must be a number!')
    } else if (userInp < 0){
        console.log('Number must be positive')
>>>>>>> 28fc46771718a56cf606c04b1c25ec5d158774fc
    } else {
        console.log('Try again!')
    }
    console.log(userInp);
