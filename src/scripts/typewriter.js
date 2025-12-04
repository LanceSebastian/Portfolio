var i = 0;
var txt = "I design and build websites.";
var maxSpeed = 100;

function typeWriter(){
    if (i < txt.length){
        document.getElementById("typewrite").innerHTML += txt.charAt(i);
        i++;
        if (i == txt.length-1){
            setTimeout(typeWriter, 500)
        } else {
            setTimeout(typeWriter, maxSpeed * Math.random())
        }
    }
}

window.onload = typeWriter;
