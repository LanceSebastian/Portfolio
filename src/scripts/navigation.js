const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".links li");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;

        navLinks.forEach(link => {
          link.classList.toggle(
            "selected",
            link.dataset.link === id
          );
        });
      }
    });
  },
  {
    threshold: 0.6, // % of section visible
  }
);

sections.forEach(section => observer.observe(section));
