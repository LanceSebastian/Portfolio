const steps = [
  {
    icon: "fa-handshake",
    title: "1. Plans & Discussions",
    text: "We discuss your goals and purposes, and outline the features of the website."
  },
  {
    icon: "fa-paintbrush",
    title: "2. Design the Look",
    text: "We review initial designs, including the layout, colours, and stylistic choices."
  },
  {
    icon: "fa-hammer",
    title: "3. Development",
    text: "Your ideas come to life as a fully functional, user-friendly website."
  },
  {
    icon: "fa-puzzle-piece",
    title: "4. Add your Content",
    text: "Once the structure is ready, your images, videos, and written materials are added on to the site."
  },
  {
    icon: "fa-microscope",
    title: "5. Testing",
    text: "A thorough testing process ensures that the website works as intended across multiple devices."
  },
  {
    icon: "fa-rocket",
    title: "6. Launch Day",
    text: "I fully handle the setup, launching a finished product that runs smoothly and connects to necessary services, before handing it over to you."
  },
  {
    icon: "fa-screwdriver-wrench",
    title: "7. Ongoing Help",
    text: "I can provide optional administrative services for updates, maintenance, and support, as your goals and needs continue to change and grow."
  }
];

const servicesTemplate = document.getElementById("servicesTemplate");
const services = document.getElementById("services");

steps.forEach(step => {
  const tpl = servicesTemplate.content.cloneNode(true);
  tpl.querySelector("i").classList.add(step.icon);
  tpl.querySelector("h4").textContent = step.title;
  tpl.querySelector("p").textContent = step.text;
  services.appendChild(tpl);
});
