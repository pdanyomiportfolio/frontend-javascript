// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "Alice",
  lastName: "Johnson",
  age: 21,
  location: "Accra",
};

const student2: Student = {
  firstName: "Michael",
  lastName: "Smith",
  age: 23,
  location: "Kumasi",
};

// Store students in an array
const studentsList: Student[] = [student1, student2];

// Create a table
const table = document.createElement("table");
table.border = "1"; // optional: adds a border so it’s visible

// Loop through students and add rows
studentsList.forEach((student) => {
  const row = table.insertRow();

  const firstNameCell = row.insertCell();
  const locationCell = row.insertCell();

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
});

// Append table to the document body
document.body.appendChild(table);
