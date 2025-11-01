const canvas = document.getElementById("frontCover");

const width = canvas.width * 2;
const height = canvas.height * 2;

const ctx = canvas.getContext("2d");
const maxStarRadius = 1.5;
const stars = addStars(width, height, 20);
const minStarOpacity = 0.1;
const maxStarOpacity = 0.7;

var date = new Date();
let counter = 0;

function addForeground(ctx) {    
    ctx.globalCompositeOperation = "xor";
    ctx.imageSmoothingEnabled = false;
    var image = new Image();
    image.src = "../src/city.png";
    
    image.addEventListener("load", (e) => {
        ctx.drawImage(image, 0,0, width, height);
    }); 
}

function fillCircle(ctx, x, y, r, fillStyle) {
  ctx.beginPath();
  ctx.fillStyle = fillStyle;
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fill();
}

function getOpacity(factor) {
  const opacityIncrement =
    (maxStarOpacity - minStarOpacity) * (Math.sin(factor/1000));
  const opacity = minStarOpacity + opacityIncrement;
  return opacity;
}

function addStars(width, height, spacing) {
    const stars = [];
    
    for(let x = 0; x < width/2; x += spacing){
        for(let y = 0; y < height/2; y += spacing){
            const star = {
                x: x + randomInt(spacing),
                y: y + randomInt(spacing),
                r: Math.random() * maxStarRadius
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
    ctx.fillStyle = "#030318";
    ctx.fillRect(0,0,width,height);


    stars.forEach(function(star,i) {
        const factor = (counter*i);
        const x = star.x;
        const y = star.y;
        const opacity = getOpacity(factor);
        fillCircle(ctx, x, y, star.r, `rgba(255, 255, 255, ${opacity}`);

    });

    counter++;
    requestAnimationFrame(render);
}

render();
