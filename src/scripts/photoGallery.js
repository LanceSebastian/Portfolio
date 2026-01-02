const photoItems = [
    {
        src: "./src/photoGallery/01_sarahTaiwanStore.JPG", 
        title: "Shopping Aisle", 
        desc: "Sarah shopping at a pharmacy store in Taipei, Taiwan. She was feeling ill."
    },
    {
        src: "./src/photoGallery/02_taiwanStreet.JPG",
        title: "Down a street", 
        desc: "I captured this photo at a random street in Taipei, Taiwan."
    },
    {
        src: "./src/photoGallery/03_sarahTower.JPG",
        title: "Peace Memorial Park, Taiwan", 
        desc: "A photo of Sarah standing in the Peace Memorial Park in Taipei. True to its name, it was very peaceful."
    },
    {
        src: "./src/photoGallery/04_towerSarah.JPG",
        title: "Pagoda Memorial Park, Taiwan", 
        desc: "The beautiful pagoda in the Peace Memorial Park in Taipei."
    },
    {
        src: "./src/photoGallery/05_sarahTrain.JPG",
        title: "Taipei Metro Station", 
        desc: "The Taipei Metro Station where we caught the train to Houtong village."
    },
    {
        src: "./src/photoGallery/06_catBell.JPG",
        title: "Catbell, Houtong", 
        desc: "A bell shaped like a cat in Houtong village. You ring it for good luck!"
    },
    {
        src: "./src/photoGallery/07_sarahCat.JPG",
        title: "Sarah and Cat, Houtong", 
        desc: "A cute statue of a cat in Houtong village. Sarah seems to like it."
    },
    {
        src: "./src/photoGallery/08_cats.JPG",
        title: "The Cats of Houtong", 
        desc: "A group of cats lounging worry-free in Houtong village. That's the life."
    },
    {
        src: "./src/photoGallery/09_abandoned.JPG",
        title: "Abandoned Homes, Houtang", 
        desc: "The abandoned homes in Houtong village that were once inhabited by miners."
    },
    {
        src: "./src/photoGallery/10_villageTerrain.JPG",
        title: "The Country Road, Houtong", 
        desc: "The terrain of Houtong village with mountains in the background."
    },
    {
        src: "./src/photoGallery/11_crowdedStreet.JPG",
        title: "Busy Street, Jiufen", 
        desc: "The streets of Jiufen were packed with people exploring the shops and food stalls."
    },
    {
        src: "./src/photoGallery/12_aGlance.JPG ",
        title: "Reflection, Jiufen", 
        desc: "I caught a reflection of Sarah in a shop window in Jiufen."
    },
    {
        src: "./src/photoGallery/13_lanternStairs.JPG",
        title: "Lantern Stairs, Jiufen", 
        desc: "The stairs lit up with lanterns in Jiufen at night."
    },
    {
        src: "./src/photoGallery/14_lanterns.JPG",
        title: "Lanterns, Jiufen", 
        desc: "The Lantern lights. It made the streets look magical at night."
    },
    {
        src: "./src/photoGallery/15_jiufenScenery.JPG",
        title: "The View, Jiufen", 
        desc: "The landsape view of Jiufen from high above. It looked good at night too!"
    },
    {
        src: "./src/photoGallery/16_jiufenCafe.JPG",
        title: "The Tea House, Jiufen", 
        desc: "The famous tea house of Jiufen. Some say it inspired the movie: Spirited Away."
    },
    {
        src: "./src/photoGallery/17_jiufenLife.JPG",
        title: "The Life, Jiufen", 
        desc: "A glimpse of what life is like in Jiufen."
    },
    {
        src: "./src/photoGallery/18_lanceResting.JPG",
        title: "Quick Rest, Jiufen", 
        desc: "I got tired of walking in the sun and found a comfy spot to rest."
    },
    {
        src: "./src/photoGallery/19_cuteCat.JPG",
        title: "Cute Cat, Jiufen", 
        desc: "A cute cat we met on our walk."
    },
    {
        src: "./src/photoGallery/20_pathsJiufen.JPG",
        title: "The Paths, Jiufen", 
        desc: "The long and winding paths through the Mountain's side."
    },
    {
        src: "./src/photoGallery/21_behindLance.JPG",
        title: "Ocarina, Jiufen", 
        desc: "Sarah took this photo of me playing the ocarina in Jiufen. It makes me look mysterious."
    },
    {
        src: "./src/photoGallery/22_jiufenTemple.JPG",
        title: "Qingyun Temple, Jiufen", 
        desc: "My girlfriend took this beautiful picture of the Qingyun Temple."
    },
    {
        src: "./src/photoGallery/23_lanceMeetDog.JPG",
        title: "Dog Friend, Jiufen", 
        desc: "I met an excited dog in Jiufen!"
    },
    {
        src: "./src/photoGallery/24_chiangKaishek.JPG",
        title: "Chiang Kai-shek Memorial", 
        desc: "The grand entrance to the Chiang Kai-shek Memorial in Taipei."
    },
    {
        src: "./src/photoGallery/25_nationalConcertHall.JPG",
        title: "National Concert Hall", 
        desc: "A beautiful view of the National Concert Hall in Taipei."
    },
    {
        src: "./src/photoGallery/26_chiangKaiShek.JPG",
        title: "The Memorial Statue", 
        desc: "Sarah meets her ancestor Chiang Kai-shek."
    },
    {
        src: "./src/photoGallery/27_pretty.JPG",
        title: "Beautiful Girl", 
        desc: "Sarah overlooking the memorial grounds."
    },
    {
        src: "./src/photoGallery/28_forestStairs.JPG",
        title: "Forest Stairs, Yangmingshan", 
        desc: "A serene stairway through the forest in Yangmingshan National Park."
    },
    {
        src: "./src/photoGallery/29_crazyBusRide.JPG",
        title: "Foggy Road, Yangmingshan", 
        desc: " A crazy bus ride up the foggy roads of Yangmingshan National Park."
    },
    {
        src: "./src/photoGallery/30_buffalos.JPG",
        title: "Buffalo", 
        desc: "A buffalo grazing in Yangmingshan National Park."
    },
    {
        src: "./src/photoGallery/31_dogVbuffalo.JPG",
        title: "Dog Meets Buffalo", 
        desc: "A picture my lovely girlfriend took of a dog meeting a buffalo in Yangmingshan."
    },
];

const photoGalleryTemplate = document.getElementById("photoGalleryTemplate");
const photoGallery = document.getElementById("photoGallery");

randPhotos = shuffle(photoItems);

for (let i = 0; i < 20; i++) {
    const clone = photoGalleryTemplate.content.cloneNode(true);
    const item = randPhotos[i];

    clone.querySelector("img").src = item.src;
    clone.querySelector("img").alt = item.title;
    clone.querySelector("h3").textContent = item.title;
    clone.querySelector("p").textContent = item.desc;

    photoGallery.appendChild(clone);
}