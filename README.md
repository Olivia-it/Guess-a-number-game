# Introduction

We have created two simple command line games to familiarise ourselves with this concept. We practiced git commands and using nodeJS in the terminal and became more comfortable with them throughout the day. The two games we created are Rock, Paper, Scissors and a Number Game.


# How to install and run the games
1. clone the git repository to your machine
```
git clone git@github.com:Olivia-it/Guess-a-number-game.git
```

2. Navigate to directory 
```
cd Guess-a-number-game
```

3. Install node packages
```
npm install
```

4. Run node on JS file to run game!
- Rock, Paper, Scissors
```
node rock-paper-scissors.js
```
**OR**
- Number Game
```
node numberGame.js
```
## Technologies Used
- Javascript

## Process
### Number Game

We used the prompt to allow the user to enter text into the command line.

```js
const prompt=require("prompt-sync")({sigint:true})
let userInp = prompt("Enter a number between 1 and 10: ")
```


We got the computer to generate a random number between 1 and 10, using the Math.random() function, which worked nicely for this purpose.
```js
let computerInp = Math.floor(Math.random() * 10);
```


We created a function which follows the logic of a guessing game using if and else statements.
```js
if (parsedInp === computerInp){
        console.log("You read the computer's mind!")
    } else if (parsedInp > 10){
        console.log('Number must be between 1 and 10')
    } else if (parsedInp < 0){
        console.log('Number must be positive') 
    } else {
        console.log('Try again!')
    }
```
## Rock, Paper, Scissors

We first defined the computer to randomly pick a number between 1 and 3 which correlated with the possible choices in a game of rock, paper, scissors. As well as prompt for the user to input their choice.
```js
let choices = ["rock", "paper", "scissors"];
let usercChoice = prompt("Pick rock, paper or scissors: ");
let randomNum = Math.floor(Math.random() * choices.length)
let comptChoice = choices[randomNum]
```

We then defined the function for the rock, paper, scissor using else if statements.

```js
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
```
We also added a clause which errored if the user entered something which wasn't rock, paper or scissors

```js
else if(usercChoice !== "rock" && usercChoice !== "paper" && usercChoice !== "scissors"){
        console.log("You need to pick rock, paper or scissors")
```

Finally, we initialised the game

```js
game(usercChoice, comptChoice)
```



# Challenges 
Due to our inexperience in making command line interactive games, we took writing the code in turns whilst the other person watched and advised to ensure that we were both learning during the process.

We had some issues pushing and pulling on git, with occassionally things being overwritten by accident. However, we solved these issues and learned from them.

In the number game, we realised that even if the user enters a number, prompt treats the input as a string, so had to use parseInt to make the function treat the inputs as numbers.



```js
let parsedInp = parseInt(userInp)
```

# Wins
1. Learned that prompt treats all inputs as strings by default.

2. Learned the importance of pulling before you push in git.

3. Learned how to work well as a team by taking turns writing code, whilst the other person helps a long the way. It was a great opportunity to learn from each other.

# Bugs
No bugs remaining

# Future Features
In future, we would add capability for the games to be played in a browser, using HTML, CSS and also JS. 

# Game 1 -> Guess a Number
Our first game allows the user to input a number between 1 and 10 in the console. If the user guesses the same number as the computer is thinking, they win!



# Game 2 -> Rock, Paper, Scissors
Our second game is a classic game of rock, paper, scissors. Each game the computer will pick one of the three choices, rock, paper or scissors at random. The user will also input one of the three choices to see if they can beat the computer.