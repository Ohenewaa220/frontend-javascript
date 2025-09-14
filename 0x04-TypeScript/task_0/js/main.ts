// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "Nana",
  lastName: "Owusu-Ansah",
  age: 20,
  location: "Accra",
};

const student2: Student = {
  firstName: "Kwesi",
  lastName: "Mensah",
  age: 22,
  location: "Kumasi",
};

// Array of students
const studentsList: Student[] = [student1, student2];

// Create a table
const table = document.createElement("table");

// Create table header
const headerRow = document.createElement("tr");
const th1 = document.createElement("th");
th1.textContent = "First Name";
const th2 = document.createElement("th");
th2.textContent = "Location";
headerRow.appendChild(th1);
headerRow.appendChild(th2);
table.appendChild(headerRow);

// Add student rows
studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const td1 = document.createElement("td");
  td1.textContent = student.firstName;

  const td2 = document.createElement("td");
  td2.textContent = student.location;

  row.appendChild(td1);
  row.appendChild(td2);
  table.appendChild(row);
});

// Append table to body
document.body.appendChild(table);
