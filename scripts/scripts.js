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

    newEmployee.salary = cleanSalary(newEmployee.salary);

    // push employee to masterList
    masterList.push(newEmployee);

    // append information to DOM - ver 0.5
    displayEmployees();
  }

  // display total salary - ver 1.0
}; // end addEmployee

var cleanSalary = function(messyNumber){
  console.log('in cleanSalary');
  // this will remove anything but digits and dots
  cleanNumber = messyNumber.replace(/[^\.\d]/g,'');

  // this will check for multiple dots and if so, keep only the first dot
  if (cleanNumber.match(/\./g).length>1) {
    firstTime = true;
    toRemove = [];
    for (var i = 0; i < cleanNumber.length; i++) {
      console.log(cleanNumber[i]);
      console.log(firstTime);
      if (cleanNumber[i] == '.' && firstTime){
        firstTime = false;
      } else if (cleanNumber[i] == '.') {
        toRemove.push(i);
      }
    }

    for (var j = toRemove.length-1; j >= 0 ; j--) {
      dot = toRemove[j];
    console.log('Before splice:',cleanNumber);
    cleanNumber = cleanNumber.substr(0,dot)+cleanNumber.substr(dot+1);
    console.log('After splice:',cleanNumber);
    }

  }
  console.log(cleanNumber);
  cleanNumber = +(Number(cleanNumber).toFixed(2));
  console.log(cleanNumber);

  return cleanNumber;
}; // end cleanSalary

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
      var dispSalary = '$ '+masterList[i].salary;

      employeeList.innerHTML += '<tr><td>'+masterList[i].firstName+'</td><td>'+
      masterList[i].lastName+'</td><td>'+masterList[i].idNum+'</td><td>'+
      masterList[i].jobTitle+'</td><td>'+dispSalary+'</td></tr>';
    }
  }
};
