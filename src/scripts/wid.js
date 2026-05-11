const content = [
  {
    icon: "fa-paintbrush",
    title: "Custom Websites",
    text: `Hand-coded from scratch, tailored to your brand. 
    Just a site built specifically for your business and your customers.`
  },
  {
    icon: "fa-mobile-screen",
    title: "Fully Responsive",
    text: `Your website will adapt seamlessly to all screen sizes, from 
    mobile phones to large desktop displays.`
  },
  {
    icon: "fa-magnifying-glass",
    title: "SEO Integrated",
    text: `Built for search engines. Fast websites and strategic signposting 
    to help you rank higher and attract more visitors.`
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
