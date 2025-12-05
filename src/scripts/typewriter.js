var letter = 0;
var iSub = 0;
var randItems = [];
const subtitleArray = [
    "I design to your tastes.",
    "I build to your specifications.",
    "I make it fast websites.",
    "I Lorem for your Ipsum.",
    "I maintain for stability."
];

var txt = "I design and build websites.";
var maxSpeed = 100;

function getSentence(){
    var i = iSub % subtitleArray.length;
    if (i == 0){ randItems = shuffle(subtitleArray);}
    txt = randItems[i];
    typeWriter();

}

function backspace(){
    if (letter <= txt.length){
        document.getElementById("typewrite").innerHTML = txt.slice(0,-letter);
        letter++;
        setTimeout(backspace, maxSpeed * Math.random())
    } 
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

window.onload = getSentence;
