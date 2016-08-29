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
    // and also display total salary - ver 1.0
    refreshDisplay();
  }

}; // end addEmployee

var cleanSalary = function(messyNumber){
  console.log('in cleanSalary with:', messyNumber);
  // this will remove anything but digits and dots
  var cleanNumber = messyNumber.replace(/[^\.\d]/g,'');

  // It's necessary to do a null-check before using .length below
  var dotMap;
  if (!cleanNumber.match(/\./g)){
    dotMap = [];
  } else {
    dotMap = cleanNumber.match(/\./g);
  }

  // this will check for multiple dots and if so, keep only the first dot
  if (dotMap.length>1) {
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
    var dot;
    for (var j = toRemove.length-1; j >= 0 ; j--) {
      dot = toRemove[j];
    cleanNumber = cleanNumber.substr(0,dot)+cleanNumber.substr(dot+1);
    }
  }
  cleanNumber = +(Number(cleanNumber).toFixed(2));

  return cleanNumber;
}; // end cleanSalary

var updateSalaryCost = function(){
  console.log('in updateSalaryCost');
  var totalCost = 0;

  for (var i = 0; i < masterList.length; i++) {
    totalCost += masterList[i].salary;
  }

  // divide by 12 to get monthly cost
  totalCost = +((totalCost/12).toFixed(2));

  return totalCost;
}; // end updateSalaryCost

var refreshDisplay = function(){
  console.log('in refreshDisplay');
  // first empty the employee table on the DOM
  var employeeList = document.getElementById('allEmployees');
  var emptyText = document.getElementById('defaultText');
  var costText = document.getElementById('monthCost');
  employeeList.innerHTML = '<tr><th>First Name</th><th>Last Name</th>'+
  '<th>ID Number</th><th>Job Title</th><th>Salary</th><th>Delete</th></tr>';

  // Then, if there are no emplyees
  if (masterList.length === 0){
    emptyText.innerHTML='No Employees Entered';
    costText.innerHTML='';
  } else {
    emptyText.innerHTML='';

    var monthlySalaryCost = updateSalaryCost();
    var dispTotal =
    monthlySalaryCost.toLocaleString('USD',{style:'currency',currency:'USD'});
    costText.innerHTML='Monthly Cost of Salaries: '+dispTotal;

    // Then loop through all the employees in the list and add them to the DOM
    for (var i = 0; i < masterList.length; i++) {
      empNum = i+1;
      var dispSalary =
      masterList[i].salary.toLocaleString('USD',{style:'currency',currency:'USD'});

      employeeList.innerHTML += '<tr><td>'+masterList[i].firstName+'</td><td>'+
      masterList[i].lastName+'</td><td>'+masterList[i].idNum+'</td><td>'+
      masterList[i].jobTitle+'</td><td>'+dispSalary+
      '</td><td><button onclick="removeEmployee(this.innerHTML)">Delete Record '+
      empNum+'</button></td></tr>';
    }
  }
}; // end refreshDisplay

var removeEmployee = function(callingInfo){
  console.log('in removeEmployee with:', callingInfo);

  // this removes anything but digits, convert it to a number and -1 for index
  var deleteIndex = Number(callingInfo.replace(/[^\d]/g,''))-1;

  // remove that employee from the Master List
  removedFromList  = masterList.splice(deleteIndex,1);

  alert('Employee with ID number of \''+removedFromList[0].idNum+
  '\' will be removed from the records. His/her salary will no longer be '+
  'included in the total monthly cost.');

  // Then refresh the display
  refreshDisplay();
}; // end removeEmployee
