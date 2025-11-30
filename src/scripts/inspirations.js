const inpsoItems = [
    {
        src: "./src/inspirations/frierenCover.jpg", 
        title: "Frieren: Beyond Journey's End", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/inspirations/EverythingEverywhereAllAtOnce.jpg",
        title: "Everything Everywhere All at Once", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/inspirations/LabiSiffre.jpg",
        title: "Bless the Telephone", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/inspirations/laputa castle in the sky.jpg",
        title: "Laputa: Castle in the Sky", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/inspirations/marcusAurelius.jpg",
        title: "Meditations", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/inspirations/minecraftXBOX.jpg",
        title: "Minecraft: Xbox 360 Edition", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/inspirations/skyrim.jpg",
        title: "Skyrim", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/inspirations/yourName.jpg",
        title: "Your Name", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/inspirations/castAway.jpg",
        title: "Cast Away", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/inspirations/darkSouls3.jpg",
        title: "Dark Souls 3", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/inspirations/Portal2.jpg",
        title: "Portal 2", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/inspirations/redDeadRedemption2.jpg",
        title: "Red Dead Redemption 2", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/inspirations/StardewValley.png",
        title: "Stardew Valley", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/inspirations/theManFromEarth.jpg",
        title: "The Man From Earth", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/inspirations/diogenes.png",
        title: "Diogenes", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/inspirations/intoTheSpiderversejpg.jpg",
        title: "Spider-Man: Into The Spiderverse", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/inspirations/jackieChan.jpg",
        title: "Jackie Chan", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/inspirations/pewdiepie.png",
        title: "Pewdiepie", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/inspirations/sunTzu.jpg",
        title: "Sun Tzu", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/inspirations/terraria.jpg",
        title: "Terraria", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/inspirations/dnd.png",
        title: "Dungeons & Dragons", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/inspirations/doomEternal.jpg",
        title: "Doom: Eternal", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/inspirations/hollowKnight.jpg",
        title: "Hollow Knight", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/inspirations/howToTrainYourDragon.jpg",
        title: "How To Train Your Dragon", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/inspirations/htmmbgd.jpg",
        title: "How to Make Millions before Grandma dies", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/inspirations/iwteyp.jpg",
        title: "I want to eat your Pancreas", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/inspirations/spiderMan.png",
        title: "Marvel Spider-Man", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/inspirations/vanoss.png",
        title: "VanossGaming", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },

];

const inspirationsTemplate = document.getElementById("inspirationsTemplate");
const inspirationGallery = document.getElementById("inspirations");

randItems = shuffle(inpsoItems);

randItems.forEach(item => {
    const clone = inspirationsTemplate.content.cloneNode(true);

    clone.querySelector("img").src = item.src;
    clone.querySelector("img").alt = item.title;
    clone.querySelector("h3").textContent = item.title;
    clone.querySelector("p").textContent = item.desc;

    inspirationGallery.appendChild(clone);

})