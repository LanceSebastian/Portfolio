const testimonials = [
    {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        name: "Client Name",
        business: "Business Name"
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
