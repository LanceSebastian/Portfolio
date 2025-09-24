
var modal = document.getElementById("myModal");
var content = document.getElementById("content");

fetch("./src/grades.json")
    .then(res => res.json())
    .then(courses => {
        const container = document.getElementById("courseList");

        courses.forEach(c => {
            const button = document.createElement("button");
            button.textContent = c.name;
            button.classList.add(".module");
            
            button.setAttribute("data-id", c.id); // include a reference for future
            
            button.addEventListener("click", (e) => {
                content.textContent = `You clicked on: ${c.name} (ID: ${e.target.dataset.id})`;
                modal.style.display = "block";
            });

            container.appendChild(button);
        });
    }).catch(err => console.error("Error loading JSON:", err));