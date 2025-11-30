const inpsoItems = [
    {
        src: "./src/inspirations/frierenCover.jpg", 
        title: "My Image", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/inspirations/EverythingEverywhereAllAtOnce.jpg",
        title: "My Image", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/inspirations/LabiSiffre.jpg",
        title: "My Image", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/inspirations/laputa castle in the sky.jpg",
        title: "My Image", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/inspirations/marcusAurelius.jpg",
        title: "My Image", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/inspirations/minecraftXBOX.jpg",
        title: "My Image", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/inspirations/skyrim.jpg",
        title: "My Image", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/inspirations/yourName.jpg",
        title: "My Image", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/inspirations/castAway.jpg",
        title: "My Image", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/inspirations/darkSouls3.jpg",
        title: "My Image", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/inspirations/Portal2.jpg",
        title: "My Image", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/inspirations/redDeadRedemption2.jpg",
        title: "My Image", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/inspirations/StardewValley.png",
        title: "My Image", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/inspirations/theManFromEarth.jpg",
        title: "My Image", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/inspirations/diogenes.png",
        title: "My Image", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/inspirations/intoTheSpiderversejpg.jpg",
        title: "My Image", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/inspirations/jackieChan.jpg",
        title: "My Image", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/inspirations/pewdiepie.png",
        title: "My Image", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/inspirations/sunTzu.jpg",
        title: "My Image", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/inspirations/terraria.jpg",
        title: "My Image", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/inspirations/dnd.png",
        title: "My Image", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/inspirations/doomEternal.jpg",
        title: "My Image", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/inspirations/hollowKnight.jpg",
        title: "My Image", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/inspirations/howToTrainYourDragon.jpg",
        title: "My Image", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/inspirations/htmmbgd.jpg",
        title: "My Image", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/inspirations/iwteyp.jpg",
        title: "My Image", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/inspirations/spiderMan.png",
        title: "My Image", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/inspirations/vanoss.png",
        title: "My Image", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },

];

const inspirationsTemplate = document.getElementById("inspirationsTemplate");
const inspirationGallery = document.getElementById("inspirations");

inpsoItems.forEach(item => {
    const clone = inspirationsTemplate.content.cloneNode(true);

    clone.querySelector("img").src = item.src;
    clone.querySelector("img").alt = item.title;
    clone.querySelector("h3").textContent = item.title;
    clone.querySelector("p").textContent = item.desc;

    inspirationGallery.appendChild(clone);

})