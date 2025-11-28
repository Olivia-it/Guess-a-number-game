// const numForm = document.querySelector('#numForm')
// const numResult = document.querySelector('#result')

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
    } else {
        return 'Try again!'
    }
}