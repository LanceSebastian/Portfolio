window.onscroll = function() {myFunction()};
		
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

var cards = document.querySelectorAll('.card');
[...cards].forEach((card)=>{
    card.addEventListener('click',function() {
        card.classList.toggle('is-flipped');
        });
    });