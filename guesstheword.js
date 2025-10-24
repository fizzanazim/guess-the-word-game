

let alphabetBlock = document.getElementById("alphabet-block")
let enterWordBlock = document.getElementById("enter-words-block")

let messageBlock = document.getElementById("message-block")

let word_array = ["apple", "grapes", "pineapple", "apricot", "banana", "mango", "orange", "grapewater", "beetroot"];
let underscores;

let restartButton = document.getElementById("restart-button")

let letter_count = 0;
let array_index;
let chances;
let word_to_guess;

function generateRandom() {

    let randomNum = Math.random() * word_array.length;
    array_index = Math.floor(randomNum)
    word_to_guess = word_array[array_index]
    chances = (word_to_guess.length) + 2

}

generateRandom()

function createAlphabetsFunc() {

    alphabetBlock.innerHTML = ""

    for (let i = 97; i <= 122; i++) {

        let alphabets = document.createElement("button")
        alphabets.classList.add("alphabet-styling")
        alphabets.innerHTML = String.fromCharCode(i)
        alphabetBlock.append(alphabets)

    }

}

createAlphabetsFunc()

function underscore_Placement() {

    enterWordBlock.innerHTML = ""

    for (let j = 0; j <= word_to_guess.length - 1; j++) {

        underscores = document.createElement("h2");
        underscores.classList.add("underscore-div")
        underscores.innerHTML = "_"
        enterWordBlock.append(underscores)

    }

}

let places_occupied = 0;

underscore_Placement()

let alphabetArray = document.querySelectorAll(".alphabet-styling")
let underscoreDiv = document.querySelectorAll(".underscore-div")

function fillBlanksFunc(alpha, underscore_array) {

    underscore_array.forEach((e, i) => {

        if ((alpha.innerHTML) === word_to_guess[i]) {

            e.innerHTML = alpha.innerHTML;
            places_occupied++
            letter_count++

        }

    });

    if (letter_count > 0) {
        console.log(alpha.innerHTML, "alpha.innerHTML");

        messageBlock.innerHTML = ` the letter ${(alpha.innerHTML)} is found ${letter_count} times`;
    }
    else {
        messageBlock.innerHTML = ` ${alpha.innerHTML} not found <br> 
                ${underscoreDiv.length - places_occupied} places left`
    }

    if (places_occupied == word_array[array_index].length) {

        messageBlock.innerHTML = `congrats! <br> you have found the word <span>${word_array[array_index]}</span>`;

    }

    letter_count = 0

}

function buttonclick(alphabet_array, underscore_array) {

    alphabet_array.forEach((element, index) => {

        element.addEventListener("click", () => {

            fillBlanksFunc(element, underscore_array)
            element.disabled = true

        })

    });

}

buttonclick(alphabetArray, underscoreDiv)

restartButton.addEventListener("click", () => {

    messageBlock.innerHTML = ""
    places_occupied = 0
    generateRandom()
    createAlphabetsFunc()
    underscore_Placement()
    let alphabetArray = document.querySelectorAll(".alphabet-styling")
    let underscoreDiv = document.querySelectorAll(".underscore-div")
    buttonclick(alphabetArray, underscoreDiv)

})


