console.log('scripts.js sourced!');

var masterList = [];

var addEmployee = function() {
  console.log('in addEmployee');
  // assign elements to variables
  firstNameBox = document.getElementById('firstNameIn');
  lastNameBox = document.getElementById('lastNameIn');
  idNumBox = document.getElementById('idNumIn');
  jobTitleBox = document.getElementById('jobTitleIn');
  salaryBox = document.getElementById('salaryIn');

  // store information from the inputs - ver 0.4
  var newEmployee = {
    firstName: firstNameBox.value,
    lastName: lastNameBox.value,
    idNum: idNumBox.value,
    jobTitle: jobTitleBox.value,
    salary: salaryBox.value
  };

  // Assume the best
  var allFieldsEntered = true;

  // Double-check for the worst
  for (var key in newEmployee){
    // Check a value only if it's an "own" property to prevent false positives
    if (newEmployee.hasOwnProperty(key)){
      // Check to see if a field was left blank
      if (newEmployee[key] === ''){
        console.log('Found a blank field: '+key);
        // If it was then set flag to false
        allFieldsEntered = false;
      } else {
        // To verify entered values
        console.log(key+': '+newEmployee[key]);
      }
    }
  } // end Double-check for-in

  if (!allFieldsEntered){
      alert('All fields are required!');
    } else {
      // clear inputs - ver 0.3
      firstNameBox.value = '';
      lastNameBox.value = '';
      idNumBox.value = '';
      jobTitleBox.value = '';
      salaryBox.value = '';
      // push employee to masterList
      masterList.push(newEmployee);

      // append information to DOM - ver 0.5
      displayEmployees();
    }

  // display total salary - ver 1.0
}; // end addEmployee

var displayEmployees = function(){
  // first empty the employee table on the DOM
  employeeList = document.getElementById('allEmployees');
  emptyText = document.getElementById('defaultText');
  employeeList.innerHTML = '<tr><th>First Name</th><th>Last Name</th>'+
  '<th>ID Number</th><th>Job Title</th><th>Salary</th></tr>';

  // Then, if there are no emplyees
  if (masterList.length === 0){
    emptyText.innerHTML='No Employees Entered';
  } else {
    emptyText.innerHTML='';
  // Then loop through all the employees in the list and add them to the DOM
  for (var i = 0; i < masterList.length; i++) {
    employeeList.innerHTML += '<tr><td>'+masterList[i].firstName+'</td><td>'+
    masterList[i].lastName+'</td><td>'+masterList[i].idNum+'</td><td>'+
    masterList[i].jobTitle+'</td><td>'+masterList[i].salary+'</td></tr>';
  }
}
};
