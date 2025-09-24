fetch("./src/grades.json")
    .then(res => res.json())
    .then(courses => {
        console.log("Courses loaded:", courses.length);
        courses.forEach(c => console.log(c.name, c.percent));
        const container = document.getElementById("courseList");

        courses.forEach(c => {
            const p = document.createElement("p");
            p.textContent = c.name;
            container.appendChild(p);
        });
    }).catch(err => console.error("Error loading JSON:", err));