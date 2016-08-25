Weekend Challenge 1
===================

For your weekend challenge, you will need to create an application that records employees along with their salary. We also want to add the salaries up so we know how much we’re spending each month.

The application should first have an input form that collects the following:

* Employee First Name
* Employee Last Name
* ID Number
* Job Title
* Annual Salary

A 'Submit' button should clear out the inputs and your logic should store that information. Then, that information should be appended to the DOM so the user of the application can see the information they just entered.

Finally, your logic should calculate all of the employee salaries and report back the Monthly cost of salaries.

Hard Mode
Create a delete button that removes an employee from the DOM. Note that in hard mode, it need not remove that Employee's salary from the reported total.

Pro Mode
Once the employee is deleted, also update the total spend on salaries to discount the removed employee's salary. This will require that the logic knows which element was removed. You will need to stretch yourself for this one. I also recommend that you look into jQuery's .data() function to help complete this. Note, you will need to do something both when the employee is added and when they are deleted to make your application 'smart'.

Versioning Plan
---------------
* 0.1 - html/js/css handshake and first Readme - initial commit
* 0.2 - have an input form that collects the following:
        * Employee First Name
        * Employee Last Name
        * ID Number
        * Job Title
        * Annual Salary
* 0.3 - A 'Submit' button should clear out the inputs
* 0.4 - Store this information from the inputs on 'Submit'
* 0.5 - The information should be appended to the DOM so the user of the application can see the information they just entered
* 0.6 - Calculate all of the employee salaries
* 1.0 - Report back the Monthly cost of salaries
* 1.1 - Create a delete button
* 2.0 - Make the delete button remove an employee from the DOM (it need not remove that Employee's salary from the reported total)
* 3.0 - Once the employee is deleted, also update the total spend on salaries to discount the removed employee's salary (recommended use of jQuery's .data()). Verify that action is taken both when an employee is added and when they are deleted.
* 3.1 - Use CSS to improve the look of the application.
