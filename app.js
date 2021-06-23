//grab the table
const table = document.querySelector("table");
//grab the buttons and inputs
const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const ageInput = document.querySelector("#age-input");
const addEmployeeButton = document.querySelector("#add-button");
const removeEmployeeButton = document.querySelector("#remove-button");
const clearEmployeesButton = document.querySelector("#clear-button");
const generateEmployeesButton = document.querySelector("#generate-button");

//state variables
let employees = [];

//define employee object using ES6 classes
class Employee {
  constructor(_firstName, _lastName, _age) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
  }
}

function addHeader() {
  let row = document.createElement("tr");
  row.className = "theader";
  row.innerHTML = "<th>First Name</th>" + "<th>Last Name</th>" + "<th>Age</th>";
  table.append(row);
}

// function addSampleEmployee() {
//   console.log("adding sample employee...");
//   let row = document.createElement("tr");
//   row.innerHTML = "<td>Sandy</td>" + "<td>Sample</td>" + "<td>999</td>";
//   table.append(row);
// }

function addNewEmployee(_firstName, _lastName, _age) {
  let newEmployee = new Employee(_firstName, _lastName, _age);
  employees.push(newEmployee);
}

function removeEmployee(_firstName, _lastName, _age) {
  for (employee of employees) {
    if (
      employee.firstName == _firstName &&
      employee.lastName == _lastName &&
      employee.age == _age
    ) {
      let index = employees.indexOf(employee);
      employees.splice(index, 1);
      alert(
        `${employee.firstName} ${employee.lastName}, age ${employee.age} was removed.`
      );
      return;
    }
  }
}

function clearEmployees() {
  if (employees.length == 0) {
    alert("There are currently no employees.");
    return;
  }
  employees = [];
  alert("All Entries were removed.");
}

function generateEmployees() {
  addNewEmployee("Carl", "Custom", 21);
  addNewEmployee("Katy", "Custom", 29);
  addNewEmployee("Cameron", "Custom", 32);
  addNewEmployee("Caroline", "Custom", 41);
  addNewEmployee("Camie", "Custom", 22);
  addNewEmployee("Carson", "Custom", 19);
  addNewEmployee("Ken", "Custom", 36);
  addNewEmployee("Kimmie", "Custom", 27);
  addNewEmployee("Collin", "Custom", 18);
  addNewEmployee("Cody", "Custom", 42);
  addNewEmployee("Christopher", "Custom", 56);
  addNewEmployee("Kyle", "Custom", 52);
  addNewEmployee("Kevin", "Custom", 16);
}

function fetchAllEmployees() {
  for (employee of employees) {
    let row = document.createElement("tr");
    row.innerHTML =
      `<td>${employee.firstName}</td>` +
      `<td>${employee.lastName}</td>` +
      `<td>${employee.age}</td>`;
    table.append(row);
  }
}

function renderTable() {
  addHeader();
  // addSampleEmployee();
  fetchAllEmployees();
}

function resetTable() {
  table.innerHTML = "";
}

function clearInputs() {
  firstNameInput.value = "";
  lastNameInput.value = "";
  ageInput.value = "";
}

//events
addEmployeeButton.addEventListener("click", () => {
  if (
    firstNameInput.value == "" ||
    lastNameInput.value == "" ||
    ageInput.value == ""
  ) {
    alert("Please fill out all fields.");
    return;
  }
  addNewEmployee(firstNameInput.value, lastNameInput.value, ageInput.value);
  resetTable();
  renderTable();
  clearInputs();
});

removeEmployeeButton.addEventListener("click", () => {
  if (
    firstNameInput.value == "" ||
    lastNameInput.value == "" ||
    ageInput.value == ""
  ) {
    alert("Please fill out all fields.");
    return;
  }
  removeEmployee(firstNameInput.value, lastNameInput.value, ageInput.value);
  resetTable();
  renderTable();
  clearInputs();
});

clearEmployeesButton.addEventListener("click", () => {
  clearEmployees();
  resetTable();
  renderTable();
});

generateEmployeesButton.addEventListener("click", () => {
  generateEmployees();
  resetTable();
  renderTable();
});

//Initialization
renderTable();
