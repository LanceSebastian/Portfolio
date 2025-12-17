let darkmode = localStorage.getItem("darkmode");
const darkModeToggle = document.getElementById("darkModeToggle");

const enableDarkMode = () => {
    document.body.classList.add("dark");
    localStorage.setItem("darkmode", "active");
}

const disableDarkMode = () => {
    document.body.classList.remove("dark");
    localStorage.setItem("darkmode", "inactive");
}
if (darkmode === "active") {
    enableDarkMode();
}
darkModeToggle.addEventListener("click", () => {
    darkmode = localStorage.getItem("darkmode");
    darkmode !== "active" ? enableDarkMode() : disableDarkMode();
});

/* Dark Mode Toggle (old code)*/
/*
function toggleDarkMode() {
  var element = document.body;
  element.classList.toggle("dark");
}
  */