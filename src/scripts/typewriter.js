let letter = 0;
let iSub = 0;
let randItems = [];
const subtitleArray = [
    "I design and build websites."
];

let txt = "I design and build websites.";
const maxSpeed = 100;

function getSentence(){
    const i = iSub % subtitleArray.length;
    if (i == 0){ randItems = shuffle(subtitleArray);}
    txt = randItems[i];
    typeWriter();

}

function typeWriter(){
    if (letter < txt.length){
        document.getElementById("typewrite").innerHTML += txt.charAt(letter);
        letter++;
        if (letter == txt.length-1){
            setTimeout(typeWriter, 500)
        } else {
            setTimeout(typeWriter, maxSpeed * Math.random())
        }
    } 
}

window.addEventListener("load", () => {
    getSentence();
});
