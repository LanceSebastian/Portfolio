const items = [
    {
        src: "./src/inspirations/frierenCover.jpg", 
        title: "My Image", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/CardInventoryLogo.png",
        title: "My Image", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/chef.png",
        title: "My Image", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/construction.jpg",
        title: "My Image", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/LanceFamily.jpg",
        title: "My Image", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/LanceVietnamCROPPED.jpg",
        title: "My Image", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        src: "./src/winter.jpg",
        title: "My Image", 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    }
];

const template = document.getElementById("inspirationsTemplate");
const gallery = document.getElementById("inspirations");

items.forEach(item => {
    const clone = template.content.cloneNode(true);

    clone.querySelector("img").src = item.src;
    clone.querySelector("img").alt = item.title;
    clone.querySelector("h3").textContent = item.title;
    clone.querySelector("p").textContent = item.desc;

    gallery.appendChild(clone);

})