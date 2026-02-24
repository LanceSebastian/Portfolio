const testimonials = [
    {
        text: `I had a great experience working with Lance. He was accommodating with every request, 
        clearly explained the pros and cons of each option, and never pressured me into decisions. 
        The service offers excellent value for money while delivering high-quality work.`,
        name: "Melinda",
        business: "BoSface"
    }
];

const testimonialTemplate = document.getElementById("testimonialTemplate");
const testimonialsList = document.getElementById("testimonials-list");

testimonials.forEach(item => {
    const clone = testimonialTemplate.content.cloneNode(true);
    clone.querySelector(".testimonialText").textContent = item.text;
    clone.querySelector(".testimonialName").textContent = item.name;
    clone.querySelector(".testimonialBusiness").textContent = item.business;
    testimonialsList.appendChild(clone);
});
