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
<p>${course}</p>
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

    updateTotalStudents();

});




