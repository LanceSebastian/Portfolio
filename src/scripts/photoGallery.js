const photoItems = [
    {
        src: "./src/photoGallery/01_sarahTaiwanStore.JPG", 
        title: "My Image", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/photoGallery/02_taiwanStreet.JPG",
        title: "My Image", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/photoGallery/03_sarahTower.JPG",
        title: "My Image", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/photoGallery/04_towerSarah.JPG",
        title: "My Image", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/photoGallery/05_sarahTrain.JPG",
        title: "My Image", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/photoGallery/06_catBell.JPG",
        title: "My Image", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/photoGallery/07_sarahCat.JPG",
        title: "My Image", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/photoGallery/08_cats.JPG",
        title: "My Image", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/photoGallery/09_abandoned.JPG",
        title: "My Image", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/photoGallery/10_villageTerrain.JPG",
        title: "My Image", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/photoGallery/11_crowdedStreet.JPG",
        title: "My Image", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/photoGallery/12_aGlance.JPG ",
        title: "My Image", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/photoGallery/13_lanternStairs.JPG",
        title: "My Image", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/photoGallery/14_lanterns.JPG",
        title: "My Image", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/photoGallery/15_jiufenScenery.JPG",
        title: "My Image", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/photoGallery/16_jiufenCafe.JPG",
        title: "My Image", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/photoGallery/17_jiufenLife.JPG",
        title: "My Image", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/photoGallery/18_lanceResting.JPG",
        title: "My Image", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/photoGallery/19_cuteCat.JPG",
        title: "My Image", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/photoGallery/20_pathsJiufen.JPG",
        title: "My Image", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/photoGallery/21_behindLance.JPG",
        title: "My Image", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/photoGallery/22_jiufenTemple.JPG",
        title: "My Image", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/photoGallery/23_lanceMeetDog.JPG",
        title: "My Image", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/photoGallery/24_chiangKaishek.JPG",
        title: "My Image", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/photoGallery/25_nationalConcertHall.JPG",
        title: "My Image", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/photoGallery/26_chiangKaiShek.JPG",
        title: "My Image", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/photoGallery/27_pretty.JPG",
        title: "My Image", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/photoGallery/28_forestStairs.JPG",
        title: "My Image", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/photoGallery/29_crazyBusRide.JPG",
        title: "My Image", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/photoGallery/30_buffalos.JPG",
        title: "My Image", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/photoGallery/31_dogVbuffalo.JPG",
        title: "My Image", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
];

const photoGalleryTemplate = document.getElementById("photoGalleryTemplate");
const photoGallery = document.getElementById("photoGallery");

randPhotos = shuffle(photoItems);

randPhotos.forEach(item => {
    const clone = photoGalleryTemplate.content.cloneNode(true);

    clone.querySelector("img").src = item.src;
    clone.querySelector("img").alt = item.title;
    clone.querySelector("h3").textContent = item.title;
    clone.querySelector("p").textContent = item.desc;

    photoGallery.appendChild(clone);

})