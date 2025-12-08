var letter = 0;
var iSub = 0;
var randItems = [];
const subtitleArray = [
    "I design and build websites."
];

var txt = "I design and build websites.";
var maxSpeed = 100;

function getSentence(){
    var i = iSub % subtitleArray.length;
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
