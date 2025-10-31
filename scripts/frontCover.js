const canvas = document.getElementById("frontCover");
const width = canvas.width;
const height = canvas.height;
const ctx = canvas.getContext("2d");
const maxStarRadius = 1.5;

function addForeground() {
    ctx.globalCompositeOperation = "xor";
    ctx.imageSmoothingEnabled = false;
    var image = new Image();
    image.src = "../src/city.png";
    
    image.addEventListener("load", (e) => {
        ctx.fillStyle = "rgba(0,0,0,1)";
        ctx.fillRect(0,0,width, height);
        ctx.drawImage(image, 0,0, width, height);
    });
}

function addStars(width, height, spacing) {
    const stars = [];
    
    for(let x = 0; x < width; x += randomInt(spacing)){
        for(let y = 0; y < height; y += randomInt(spacing)){
            const star = {
                x: x,
                y: y,
                r: Math.random() * maxStarRadius,
            };
            stars.push(star);
        }
    }
    return stars;
}

function randomInt(max){
    return Math.floor(Math.random() * max);
}

function render(){
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.fillRect(0,0,width,height);

    const stars = addStars(width, height, 30);

    stars.forEach(function(star) {
        const x = star.x;
        const y = star.y;
        const r = star.r;
        ctx.beginPath();
        ctx.fillStyle = "rgb(255, 255, 255)";
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
    });
}

render();
