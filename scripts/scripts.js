console.log('scripts.js sourced!');

var addEmployee = function() {
  console.log('in addEmployee');
  // Seeking DRYness, assign elements to variables
  firstNameBox = document.getElementById('firstNameIn');
  lastNameBox = document.getElementById('lastNameIn');
  idNumBox = document.getElementById('idNumIn');
  jobTitleBox = document.getElementById('jobTitleIn');
  salaryBox = document.getElementById('salaryIn');
  // store information from the inputs - ver 0.4
  empFirstName = firstNameBox.value;
  emplastName = lastNameBox.value;
  empIdNum = idNumBox.value;
  empJobTitle = jobTitleBox.value;
  empSalary = salaryBox.value;
  // clear inputs - ver 0.3
  firstNameBox.value = '';
  lastNameBox.value = '';
  idNumBox.value = '';
  jobTitleBox.value = '';
  salaryBox.value = '';
  // append information to DOM - ver 0.5
  console.log(empFirstName);
  console.log(emplastName);
  console.log(empIdNum);
  console.log(empJobTitle);
  console.log(empSalary);
  // display total salary - ver 1.0
}; // end addEmployee
