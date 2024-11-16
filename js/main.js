let studentCount = 0;

// Saqlangan ma'lumotlarni yuklash
window.onload = function () {
    loadStudents();
}

// O'quvchi qo'shish funksiyasi
function addStudent() {
    const name = document.getElementById("studentName").value;
    if (!name) {
        alert("O'quvchi ismini kiriting!");
        return;
    }

    const age =  Math.floor(Math.random() * 6) + 15;
    const group = Math.floor(Math.random() * 5) + 1;

const grades =  Math.floor(Math.random() * 5) + 1;
studentCount++;

// Yangi o'quvchini jadvalga qo'shish va localStoragega saqlash
addRowToTable(studentCount, name, age, group, grades);
saveStudent({ id: studentCount, name, age, group, grades });

document.getElementById("studentName").value = "";
    

// Jadvalga qator qo'shish
function addRowToTable(id, name, age, group, grades) {
    const table = document.getElementById("studentTable").getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    newRow.insertCell(0).textContent = id;
    newRow.insertCell(1).textContent = name;
    newRow.insertCell(2).textContent = age;
    newRow.insertCell(3).textContent = group;
    newRow.insertCell(4).textContent = grades;
    }
}

// O'quvchini saqlash
function saveStudent(student) {
    let students = JSON.parse(localStorage.getItem("students")) || [];
    students.push(student);
    localStorage.setItem("students", JSON.stringify(students));
}

// Saqlangan o'quvchilarni yuklash
function loadStudents() {
    const students = JSON.parse(localStorage.getItem("students")) || [];
    students.forEach(student => {
        addRowToTable(student.id, student.name, student.age, student.group, student.grades);
        studentCount = student.id;
    });
    }


