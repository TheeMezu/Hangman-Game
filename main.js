const letters = "abcdefghijklmnopqrstuvwxyz";

let lettersArray = Array.from(letters);

let lettersContainer = document.querySelector(".letters");

lettersArray.forEach(letter => {
    let span = document.createElement("span");
    // createtextNode shows the value of the element lw letter it makes it visible 
    let theLetter = document.createTextNode(letter);
    span.appendChild(theLetter);

    span.className = 'letter-box';

    lettersContainer.appendChild(span);
});


const words = {
    programming: ["php", "javascript", "go","scala",
        "fortran", "r" , "python" ,"mysql"],
    movies: ["prestige", "inception", "parasite", "intersteller",
        "whiplash", "memento" , "coco", "up"],
    people: ["Aber Einstein", "Hitchcok", "Alexander", "Cleopatra",
        "Mahatma Ghandi"],
    countries: ["Syria", "Egypt", "Yemen", "Palestine", "Bahrain", "Qatar"]
}

let allKeys = Object.keys(words);

let randomPropNumber = Math.floor(Math.random() * allKeys.length)
let randomPropName = allKeys[randomPropNumber];
let randomPropValue = words[randomPropName];

let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);
let randomValueValue = randomPropValue[randomValueNumber];

document.querySelector('.game-info .category span').innerHTML = randomPropName;



let lettersGuessContainer = document.querySelector(".letters-guess");
let lettersAndSpace = Array.from(randomValueValue);

lettersAndSpace.forEach(letter =>{
    let emptySpan = document.createElement("span");

    if(letter == " "){
        emptySpan.className = "with-space";
    }
    
    lettersGuessContainer.appendChild(emptySpan);
});


let guessSpans = document.querySelectorAll(".letters-guess span");
let wrongAttempts = 0;
let theDraw = document.querySelector(".hangman-draw");


document.addEventListener("click" , (evt) => {

    let thestatus = false;

    if(evt.target.className === "letter-box"){
        evt.target.classList.add("clicked");

        let clickedLetter = evt.target.innerHTML.toLowerCase();

        let theChosenWord = Array.from(randomValueValue.toLowerCase());

        theChosenWord.forEach((wordLetter,wordindex) =>{
            if(clickedLetter == wordLetter){
                thestatus = true;

                guessSpans.forEach((span,spanindex) =>{
                    if(wordindex == spanindex) {
                        span.innerHTML = clickedLetter;
                    }
                });
            }
        });

        if(thestatus != true){
            wrongAttempts++;
            theDraw.classList.add(`wrong-${wrongAttempts}`);
        }
    }
});