const content = [
  {
    icon: "fa-paintbrush",
    title: "Custom Websites",
    text: `Hand-coded from scratch, tailored to your brand. 
    A unique site for your business and customers.`
  },
  {
    icon: "fa-mobile-screen",
    title: "Fully Responsive",
    text: `Your website will be fully responsive, ensuring 
    a seamless experience on any device for all your visitors.`
  },
  {
    icon: "fa-magnifying-glass",
    title: "SEO Integrated",
    text: `Optimized for search engines. Fast performance 
    and clear navigation to attract more visitors.`
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
