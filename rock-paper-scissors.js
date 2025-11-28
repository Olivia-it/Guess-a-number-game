
const prompt=require("prompt-sync")({sigint:true})

let choices = ["rock", "paper", "scissors"];
let usercChoice = prompt("Pick rock, paper or scissors ");
let randomNum = Math.floor(Math.random() * choices.length)
let comptChoice = choices[randomNum]

function game(usercChoice, comptChoice){
    console.log(`You chose ${usercChoice}`)
    console.log(`Computer chose ${comptChoice}`)
    if(usercChoice === comptChoice){
        console.log("It's a tie!")
    }
    else if((usercChoice === "rock" && comptChoice === "scissors") || (usercChoice === "paper" && comptChoice === "rock") || (usercChoice === "scissors" && comptChoice === "paper")
    ){
console.log("You win")}
else { console.log("Computer wins!")}
}

// console.log(game(usercChoice, comptChoice))

game();