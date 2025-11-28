// const numForm = document.querySelector('#numForm')
// const numResult = document.querySelector('#result')


// numForm.addEventListener('submit', guessNumber(e))
//     e.preventDefault();
//     const userValue = Number(document.querySelector('#userNum').value)
//     const message = guessNumber(userValue);
//     numResult.textContent = message

const prompt=require("prompt-sync")({sigint:true})
let userInp = prompt("Enter a number between 1 and 10: ")
let parsedInp = parseInt(userInp)
let computerInp = Math.floor(Math.random() * 10);

// function guessNumber(num){
if (parsedInp === computerInp){
        console.log("You read the computer's mind!")
    } else if (parsedInp > 10){
        console.log('Number must be between 1 and 10')
    } else if (parsedInp < 0){
        console.log('Number must be positive') 
    } else {
        console.log('Try again!')
    }
