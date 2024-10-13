function SignIn(rame) {
    rame.preventDefault(); 

    const role = document.getElementById('role').value;
    const tables = document.getElementById('data-tables'); 
    const signUpSection = document.getElementById('sign-up-section'); 

    if (role === 'moderator') {
        // Show tables only for moderators
        signUpSection.classList.add('hidden');
        tables.classList.remove('hidden'); 
    } else if (role === 'visitor') {
        alert("Access Denied: You don't have permission to view the data tables.");
    } else {
        alert("Please select a valid role.");
    }
}


let students = [
    { name: "ნიკოლოზ", surname: "კვირიკაშვილი", age: 7, leader: "თაზო გოგიშვილი" },
    { name: "მათე", surname: "როსტიაშვილი", age: 9, leader: "გიორგი გვრიტიშვილი" }
];

function SignIn(e) {
    e.preventDefault();
    const role = document.getElementById('role').value;
    const tables = document.getElementById('data-tables');

    if (role === 'moderator') {
        tables.classList.remove('hidden');
    } else if (role === 'viewer') {
        alert("Viewers do not have permission to view.");
    }
    renderTable();
}

function renderTable() {
    const tableContainer = document.getElementById('group-23');
    tableContainer.innerHTML = '';

    students.forEach((student, index) => {
        const studentDiv = document.createElement('div');
        studentDiv.classList.add('children-data');
        studentDiv.innerHTML = `
            <p>Name: ${student.name}</p>
            <p>Lastname: ${student.surname}</p>
            <p>Age: ${student.age}</p>
            <p>Leader: ${student.leader}</p>
            <button onclick="editStudent(${index})">Edit</button>
            <button onclick="removeStudent(${index})">Remove</button>
        `;
        tableContainer.appendChild(studentDiv);
    });
}

function addStudent() {
    const name = prompt("Enter student name:");
    const surname = prompt("Enter student surname:");
    const age = prompt("Enter student age:");
    const leader = prompt("Enter group leader name:");

    if (name && surname && age && leader) {
        students.push({ name, surname, age: parseInt(age), leader });
        renderTable();
    } else {
        alert("Please fill in all fields.");
    }
}

function editStudent(index) {
    const student = students[index];

    const name = prompt("Edit student name:", student.name);
    const surname = prompt("Edit student surname:", student.surname);
    const age = prompt("Edit student age:", student.age);
    const leader = prompt("Edit leader name:", student.leader);

    if (name && surname && age && leader) {
        students[index] = { name, surname, age: parseInt(age), leader };
        renderTable();
    } else {
        alert("Please fill in all fields.");
    }
}

function removeStudent(index) {
    if (confirm("Are you sure you want to delete this student?")) {
        students.splice(index, 1);
        renderTable();
    }
}
