console.log('scripts.js sourced!');

var addEmployee = function() {
  console.log('in addEmployee');
  // store information from the inputs - ver 0.4
  // clear inputs - ver 0.3
  document.getElementById('firstNameIn').value = '';
  document.getElementById('lastNameIn').value = '';
  document.getElementById('idNumIn').value = '';
  document.getElementById('jobTitleIn').value = '';
  document.getElementById('salaryIn').value = '';
  // append information to DOM - ver 0.5
  // display total salary - ver 1.0
}; // end addEmployee
