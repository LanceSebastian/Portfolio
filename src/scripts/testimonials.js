const testimonials = [
    {
        text: `I had a great experience working with Lance. He was accommodating with every request, 
        clearly explained the pros and cons of each option, and never pressured me into decisions. 
        The service offers excellent value for money while delivering high-quality work.`,
        name: "Melinda",
        business: "BoSface"
    },
    {
        text: `I’m really impressed with the page Lance made for me. It functions very well and I love 
        the visual layout to portray my creative character. Lance produced it in good time and was very 
        helpful throughout the whole process - I highly recommend his services!`,
        name: "Lada",
        business: "Freelance Illustrator"
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
