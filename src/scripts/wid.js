const content = [
  {
    icon: "fa-paintbrush",
    title: "Custom Websites",
    text: `Hand-coded from scratch, tailored to your brand. No page
    builders, no generic templates. Just a site built specifically
    for your business and your customers.`
  },
  {
    icon: "fa-mobile-screen",
    title: "Fully Responsive",
    text: `Your website will adapt seamlessly to all screen sizes, from 
    mobile phones to large desktop displays, ensuring a consistent 
    experience for every visitor.`
  },
  {
    icon: "fa-magnifying-glass",
    title: "SEO Integrated",
    text: `Built with search engines in mind from the start. Clean 
    structure, proper metadata, and performance optimisations help your 
    site rank better and get found online.`
  },
];

const servicesTemplate = document.getElementById("servicesTemplate");
const services = document.getElementById("services");

content.forEach(step => {
  const tpl = servicesTemplate.content.cloneNode(true);
  tpl.querySelector("i").classList.add(step.icon);
  tpl.querySelector("h3").textContent = step.title;
  tpl.querySelector("p").textContent = step.text;
  services.appendChild(tpl);
});
