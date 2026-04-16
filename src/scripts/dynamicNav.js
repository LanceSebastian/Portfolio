window.addEventListener("scroll", () => {
  document.querySelector(".navBarContainer")
    .classList.toggle("solid", window.scrollY > 100);
});
