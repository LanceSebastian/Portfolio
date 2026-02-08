const content = [
  {
    icon: "fa-paintbrush",
    title: "Web Design",
    text: `Modern, clean website designs focused on usability, branding, 
    and first impressions. Every layout is carefully crafted to look great 
    and guide visitors toward action.`
  },
  {
    icon: "fa-hammer",
    title: "Web Development",
    text: `Custom-built websites using reliable, modern code. No bloated 
    templates — just fast, secure, and scalable sites built to work smoothly 
    across all browsers.`
  },
  {
    icon: "fa-money-bill-wave",
    title: "Budget Friendly",
    text: `High-quality websites at fair, transparent prices. Perfect 
    for small businesses and startups who want a professional online 
    presence without unnecessary extras.`
  },
  {
    icon: "fa-mobile-screen",
    title: "Fully Responsive",
    text: `Your website will adapt seamlessly to all screen sizes, from 
    mobile phones to large desktop displays, ensuring a consistent 
    experience for every visitor.`
  },
  {
    icon: "fa-rocket",
    title: "Optimised Page Speed",
    text: `Designed for quick load times to keep users engaged and 
    reduce bounce rates. Faster websites mean better user experience 
    and improved performance.`
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
  tpl.querySelector("h4").textContent = step.title;
  tpl.querySelector("p").textContent = step.text;
  services.appendChild(tpl);
});
