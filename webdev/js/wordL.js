
// using jquery

import {WORDS} from "./words.js";
let guessesRemaining = 6;
let solution = WORDS[Math.floor(Math.random() * WORDS.length)]
console.log(solution)

function initBoard() {  //populate board with squares
    let board = document.getElementById("board");
    for (let i = 0; i < guessesRemaining; i++) {
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
    return
}
document.getElementById('frm1').addEventListener('submit', procguess)
document.getElementById('button').addEventListener('click', procguess)


function checkGuess (guessString) {
    // alert(guessString)
    if (guessesRemaining == 0){alert("no more guesses"); return}
    let row = document.getElementsByClassName("letter-row")[6 - guessesRemaining]
    let rightGuess = Array.from(solution)

    if (guessString.length != 5) {alert("Not enough letters!"); return; }
    if (!WORDS.includes(guessString)){alert("Word not known!"); return; }

    
    for (let i = 0; i < 5; i++) {
        let letterColor = ''
        let box = row.children[i]
        let letter = guessString[i]
        
        let letterPosition = rightGuess.indexOf(guessString[i])
        // is letter in the correct guess
        if (letterPosition === -1) {
            letterColor = 'grey'
        } else {
            // now, letter is definitely in word
            // if letter index and right guess index are the same
            // letter is in the right position 
            if (guessString[i] === rightGuess[i]) {
                // shade green 
                letterColor = 'green'
            } else {
                // shade box yellow
                letterColor = 'yellow'
            }

            rightGuess[letterPosition] = "#"
        }

        let delay = 50 * i
        setTimeout(()=> {
            //shade box
            box.style.backgroundColor = letterColor
            box.innerHTML = letter
        }, delay)
    }

    if (guessString === solution) {
        guessesRemaining = 0
        return
    } else {
        guessesRemaining -= 1;
        guessString = [];

        if (guessesRemaining === 0) {
            alert(`The right word was: "${solution}"`)
        }
    }
}