const inpsoItems = [
    {
        src: "./src/inspirations/frierenCover.jpg", 
        title: "Frieren: Beyond Journey's End", 
        desc: "Frieren is an elven mage part of the former party of adventurers who defeated " +
        "the Demon King as the conclusion of a 10-year quest. However, Elves have an extremely " +
        "long lifespan so Frieren views the time spent together as ephemeral and quickly fleeting. " +
        "She has, and will outlive every human around her.  It is a story that covers grief and " +
        "the aftermath in a fantastical setting."
    },
    {
        src: "./src/inspirations/EverythingEverywhereAllAtOnce.jpg",
        title: "Everything Everywhere All at Once", 
        desc: "I watched this movie during my time at University. It made me reflect on my "+
        "relationship with my parents and strengthened how much I missed them. It was a good " +
        "film that covers a strenuous relationship between a mother and daughter, husband and wife, " +
        "and generational trauma."
    },
    {
        src: "./src/inspirations/LabiSiffre.jpg",
        title: "Bless the Telephone", 
        desc: "This song is one of my favourites. It simply resonates with many long-distance " +
        "couples, me included. It takes a lot of work to make long-distance work, especially with " +
        "different time zones. Every phone call you get is precious, and you have to become very " +
        "intentional with how you spend your time. Even during work, You cannot forget what it is " +
        "for."
    },
    {
        src: "./src/inspirations/laputa castle in the sky.jpg",
        title: "Laputa: Castle in the Sky", 
        desc: "This is a Studio Ghibli classic, I had heard about this anime through Minecraft "+
        "after seeing that the Iron Golem was based on the Golems in the movie. It was a sweet and "+
        "beautiful movie of innocence and classical adventure."
    },
    {
        src: "./src/inspirations/marcusAurelius.jpg",
        title: "Meditations", 
        desc: "In the year 180, a Roman Emperor Marcus Aurelius had recently died." + 
        " When clearing out his room of his belongings, his personal writings were discovered." +
        " Its contents were Marcus' source of self-guidance and improvement, following a Stoic" +
        " Philosophy. He had never intended to publish these writings, so these were the raw" +
        " reflections of the Former Emperor, presenting vast insight and deep wisdom from a" +
        " position others would abuse for selfish gain"
    },
    {
        src: "./src/inspirations/minecraftXBOX.jpg",
        title: "Minecraft: Xbox 360 Edition", 
        desc: "Minecraft is a game near and dear to my heart. After watching hundreds of Minecraft "+
        "videos, it was my first time actually playing with it. I had a lot of fun times with friends "+
        "coming round and playing split screen."
    },
    {
        src: "./src/inspirations/skyrim.jpg",
        title: "Skyrim", 
        desc: "If you've played this game, You know why this is good. Great adventures, fun exploration, "+
        "Dragon Slaying fun. Not much to say aside from being a fantastic game that just kept me playing "+
        "over and over again."
    },
    {
        src: "./src/inspirations/yourName.jpg",
        title: "Your Name", 
        desc: "A romantic anime film about two teenagers sharing a supernatural connection which causes "+
        "them to swap bodies. A light-hearted and emotional film that is just incredibly heart-warming. "+
        "I'm a sucker for a good romance."
    },
    {
        src: "./src/inspirations/castAway.jpg",
        title: "Cast Away", 
        desc: "This movie with Tom Hanks gave me existential dread as a little kid. The idea of being "+
        "stuck alone on an island trying to survive kept me stressed throughout the entire movie. I "+
        "suppose that's what stress is designed for, but it forever cemented itself into my mind. "
    },
    {
        src: "./src/inspirations/darkSouls3.jpg",
        title: "Dark Souls 3", 
        desc: "The last of a trilogy, I started playing this game wondering why people liked playing "+
        "this game. I had played a similar game long before named Bloodborne, and I couldn't even get "+
        "past the first level. Having matured a bit, and my motor functions and intelligence grown, I "+
        "beat the first boss with a silly combination of equipment and great difficulty. The emotional "+
        "relief was immense, and I craved more challenge."
    },
    {
        src: "./src/inspirations/Portal2.jpg",
        title: "Portal 2", 
        desc: "Deep underground, in a broken and unmaintained facility, the white walls covered in "+
        "overgrown greenery, a robot named Wheatley wakes a lady who is his only hope to escape to the "+
        "surface. You play as Chell who uses a portal gun and gravity to fly through deadly traps and "+
        "obstacles. The portal gun blew my mind as a kid, and the implementation of portals was "+
        "seamless. It was subliminal."
    },
    {
        src: "./src/inspirations/redDeadRedemption2.jpg",
        title: "Red Dead Redemption 2", 
        desc: "This game is more like an interactive movie with how well the cinematography and "+
        "world design was. Playing like a Cowboy never felt more real with the squelch of the mud "+
        "beneath your feet to the rumble of hooves while riding with your gang. "
    },
    {
        src: "./src/inspirations/StardewValley.png",
        title: "Stardew Valley", 
        desc: "Stardew Valley is a game that brings you back to a simpler time. It's a life I "+
        "wouldn't mind living. Similar to Diogenes, it brings to light what truly matters to me. "+
        "Aside from the pixel style and cute animals, I always played the game with friends and as "+
        "a way to spend more time with them."
    },
    {
        src: "./src/inspirations/theManFromEarth.jpg",
        title: "The Man From Earth", 
        desc: "A story about a seemingly immortal man which explores what the fundamental \"truths\" "+
        "of the world and humanity, and the trials and tribulations for an immortal man. It has "+
        "incredible immersion, rich with possibilities."
    },
    {
        src: "./src/inspirations/diogenes.png",
        title: "Diogenes", 
        desc: "Diogenes the Cynic discarded his only possession, a wooden bowl, after seeing a young "+
        "boy drinking water from his cupped hands, realising he had been carrying unnecessary baggage. "+
        "He was a man who embodied simplicity and rejection of materialism. This story inspires me to "+
        "see the necessity of the stuff around me for what they are and what they are not."
    },
    {
        src: "./src/inspirations/intoTheSpiderversejpg.jpg",
        title: "Spider-Man: Into The Spiderverse", 
        desc: "A well animated story about Miles Morales. Its release marked an introduction to a "+
        "certain style of animation that captivated audiences, Me included. As dramatic as it is, the "+
        "movie had me inspired. I felt like I could do anything as well as feel so excited whenever I "+
        "hear the soundtrack. "
    },
    {
        src: "./src/inspirations/jackieChan.jpg",
        title: "Jackie Chan", 
        desc: "I bonded with my dad over watching Jackie Chan movies. His slapstick, and physical "+
        "comedy were so entertaining to watch. I could relate so much to the characters he plays "+
        "during movies, being an Asian with communication difficulties. He was very inspirational"
    },
    {
        src: "./src/inspirations/pewdiepie.png",
        title: "Pewdiepie", 
        desc: "Pewdiepie is an interesting case. Watching him on and off over the years and growing "+
        "alongside him was a special experience. His recent videos are an inspiration, covering his "+
        "family life, philosophy, and hobbies."
    },
    {
        src: "./src/inspirations/sunTzu.jpg",
        title: "Sun Tzu", 
        desc: "The stories of Sun Tzu are just cool. I've read his art of war and it's really "+
        "interesting how it's applicable to everyday life just as much. Most of the content is "+
        "rather instinctual, however, It was a good read to internalise the topics mentioned. "
    },
    {
        src: "./src/inspirations/terraria.jpg",
        title: "Terraria", 
        desc: "\"This is like Minecraft but 2D\", yes but no. This game was a lot more expressive "+
        "with its equipment and gear. The mechanics that come with each one get really entertaining "+
        "and fun, giving a stronger sense of role playing and variety to how you can play."
    },
    {
        src: "./src/inspirations/dnd.png",
        title: "Dungeons & Dragons", 
        desc: "The role-playing table top game based on handling your friends spontaneous and "+
        "inane strategies whilst telling a captivating story. Recently, I made the switch from "+
        "Player to Dungeon Master and I wouldn't have my players act any other way."
    },
    {
        src: "./src/inspirations/doomEternal.jpg",
        title: "Doom: Eternal", 
        desc: "This demon-killing, rock-blasting game boiled down to simple fun. Shooting demons "+
        "to the music of rock is the soul of Doom Eternal, and the adrenaline rush of being an "+
        "unstoppable force of nature never gets old."
    },
    {
        src: "./src/inspirations/hollowKnight.jpg",
        title: "Hollow Knight", 
        desc: "A 2d platformer set in a tragic, desolate world filled with lovably cute bug "+
        "characters. The combat is simple yet skilful, with a beautiful attention to atmosphere and "+
        "detail. I fell in love with this game for its memorable characters and heartfelt story."
    },
    {
        src: "./src/inspirations/howToTrainYourDragon.jpg",
        title: "How To Train Your Dragon", 
        desc: "A Dreamwork Classic. I first watched this film when I was a smaller boy and this "+
        "movie had a scene where Hiccup and Toothless fly together. The music, the sounds, and the "+
        "animation effectively conveyed the feeling of flying free."
    },
    {
        src: "./src/inspirations/htmmbgd.jpg",
        title: "How to Make Millions before Grandma dies", 
        desc: "A Vietnamese movie following a down-on-his-luck young adult trying to lazily make "+
        "his way through life. It's a story about family, growth, and true sincerity for your loved "+
        "ones."
    },
    {
        src: "./src/inspirations/iwteyp.jpg",
        title: "I want to eat your Pancreas", 
        desc: "An anime movie depicting two students, one of which is terminally ill. They learn "+
        "to live with death and support, and I am shown grief and humanity. This is similar to "+
        "How to Make Millions Before Grandma Dies."
    },
    {
        src: "./src/inspirations/spiderMan.png",
        title: "Marvel Spider-Man", 
        desc: "A ground-breaking game featuring spider-man 2 inspired swinging, arkham knight "+
        "combat, and an emotionally gripping story. I loved this game, as I escaped the normalcy "+
        "of everyday life."
    },
    {
        src: "./src/inspirations/vanoss.png",
        title: "VanossGaming", 
        desc: "A Gaming Youtuber who simply makes entertaining videos with his friends. He also "+
        "composes EDM music under his name: Evan Fong. Vanoss uses his platform to promote other "+
        "up-and-coming musicians.  "
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