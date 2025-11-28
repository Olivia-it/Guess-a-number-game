const subButton = document.querySelector('')


function guessNumber(num){
    if (num === 7){
        return 'Correct Number!'
    } else if (num > 10){
        return 'Number must be between 1 and 10'
    } else {
        return 'Try again!'
    }
    }