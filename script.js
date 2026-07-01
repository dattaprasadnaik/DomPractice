const nameInput = document.querySelector("#nameInput");
const courseInput = document.querySelector("#courseInput");

const addBtn = document.querySelector("#addBtn");
const themeBtn = document.querySelector("#themeBtn");

const searchInput = document.querySelector("#searchInput");

const students = document.querySelector("#students");

const charCount = document.querySelector("#charCount");

const totalStudents = document.querySelector("#totalStudents");



nameInput.addEventListener("input", () => {
    let count = nameInput.value.length;
    charCount.textContent = `Characters : ${count}`;
});




themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        themeBtn.textContent = "☀️ Light Mode";
    } else {
        themeBtn.textContent = "🌙 Dark Mode";
    }

});



addBtn.addEventListener("click", () => {

    const name = nameInput.value.trim();
    const course = courseInput.value.trim();

    if (name === "" || course === "") {
        alert("Please enter both Name and Course.");
        return;
    }

    const card = document.createElement("div");
    card.classList.add("student-card");

    card.innerHTML = `
        <h3>${name}</h3>
        <p><strong>Course:</strong> ${course}</p>
        <button class="delete-btn">Delete</button>
    `;

    const deleteBtn = card.querySelector(".delete-btn");

    deleteBtn.addEventListener("click", () => {
        card.remove();
        updateTotalStudents();
    });

    students.appendChild(card);


    nameInput.value = "";
    courseInput.value = "";
    charCount.textContent = "Characters : 0";

    nameInput.focus();

    updateTotalStudents();

});


searchInput.addEventListener("input", () => {

    const searchItem = searchInput.value.toLowerCase();

    const cards = document.querySelectorAll(".student-card");

    cards.forEach(card => {

        const studentName = card
        .querySelector("h3")
        .textContent
        .toLowerCase();

        if (studentName.includes(searchItem)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});



function updateTotalStudents() {
    totalStudents.textContent = students.children.length;
}