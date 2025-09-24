fetch("./src/grades.json")
    .then(res => res.json())
    .then(courses => {
        console.log("Courses loaded:", courses.length);
        courses.forEach(c => console.log(c.name, c.percent));
        const container = document.getElementById("courseList");

        courses.forEach(c => {
            const button = document.createElement("button");
            button.textContent = c.name;
            
            button.setAttribute("data-id", c.id); // include a reference for future
            
            button.addEventListener("click", (e) => {
                alert(`You clicked on: ${c.name} (ID: ${e.target.dataset.id})`);
            });

            container.appendChild(button);
        });
    }).catch(err => console.error("Error loading JSON:", err));