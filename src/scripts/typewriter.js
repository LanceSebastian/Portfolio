let letter = 0;
let iSub = 0;
let randItems = [];

let txt = "Websites that work as hard as you.";
const maxSpeed = 100;


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
    typeWriter();
});
