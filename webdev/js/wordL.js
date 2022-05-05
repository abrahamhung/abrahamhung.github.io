
// using jquery

// import {WORDS} from "wordslist.js";
WORDS = {}
// let answer = WORDS[Math.floor(Math.random() * WORDS.length)];
let answer = "memes";
console.log(answer);
let numguess = 6;
let curguess = [];

function initBoard() {  //populate board with squares
    let board = document.getElementById("board");
    for (let i = 0; i < numguess; i++) {
        let row = document.createElement("div")
        row.className = "letter-row"
        for (let j = 0; j < 5; j++) {
            let box = document.createElement("div")
            box.className = "letter-box"
            row.appendChild(box)
        }
        board.appendChild(row)
    }
}
initBoard()

function procguess(){
    var gss = document.getElementById("frm1");
    var text = gss.elements[0].value;
    
    document.getElementById("")
    checkGuess(text)
    return;
}


function checkGuess (guessString) {
    // alert(guessString)
    let row = document.getElementsByClassName("letter-row")[6 - guessesRemaining]
    let rightGuess = Array.from(rightGuessString)

    if (guessString.length != 5) {
        alert("Not enough letters!"); return;
    }

    if (!WORDS.includes(guessString)) {
        alert("Word not known!"); return;
    }

    
    for (let i = 0; i < 5; i++) {
        let letterColor = ''
        let box = row.children[i]
        let letter = currentGuess[i]
        
        let letterPosition = rightGuess.indexOf(currentGuess[i])
        // is letter in the correct guess
        if (letterPosition === -1) {
            letterColor = 'grey'
        } else {
            // now, letter is definitely in word
            // if letter index and right guess index are the same
            // letter is in the right position 
            if (currentGuess[i] === rightGuess[i]) {
                // shade green 
                letterColor = 'green'
            } else {
                // shade box yellow
                letterColor = 'yellow'
            }

            rightGuess[letterPosition] = "#"
        }

        let delay = 250 * i
        setTimeout(()=> {
            //shade box
            box.style.backgroundColor = letterColor
            shadeKeyBoard(letter, letterColor)
        }, delay)
    }

    if (guessString === rightGuessString) {
        alert("You guessed right! Game over!")
        guessesRemaining = 0
        return
    } else {
        guessesRemaining -= 1;
        currentGuess = [];
        nextLetter = 0;

        if (guessesRemaining === 0) {
            alert("You've run out of guesses! Game over!")
            alert(`The right word was: "${rightGuessString}"`)
        }
    }
}