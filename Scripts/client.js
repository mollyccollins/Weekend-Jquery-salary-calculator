$( document ).ready( onReady );
// // A 'Submit' button should click handler on ready
let employeeRoster = [];

function onReady(){
    $( '#submitButton' ).on( 'click', employeeInfo);
    $( '#employeeOut').on( 'click', '.removeEmployeeButton', removeEmployee );
}
function employeeInfo(){
    console.log( 'in employeeInfo');
// // *input form that collects:
// // *collect the form information (inputs in html and put into an object), 
let newEmployee = {
    firstName: $( '#firstNameIn' ).val(),
    lastName: $( '#lastNameIn' ).val(),
    idNumber: $( '#idNumberIn' ).val(),
    jobTitle: $( '#jobTitleIn' ).val(),
    annualSalary: $( '#annualSalaryIn' ).val(), 
};
console.log( newEmployee );
// *store the information (push into an array)
employeeRoster.push(newEmployee);
console.log(employeeRoster);
// *Append info to the dom
displayEmployeeRoster();
// *clear the input field
$( '#firstNameIn' ).val (''),
$( '#lastNameIn' ).val (''),
$( '#idNumberIn' ).val (''),
$( '#annualSalaryIn' ).val ( '' );
}
//*function displayEmployeeRoster(){
function displayEmployeeRoster(){
console.log('in displayEmployeeRoster');
//*target & empty output ul
let el=$('#employeeOut' );
el.empty();
let salaryValue = 0;
// //*loop through roster
    for(let i=0; i<employeeRoster.length; i++){
    el.append( `<li>${ employeeRoster[i].jobTitle } 
                    ${ employeeRoster[i].firstName } 
                    ${ employeeRoster[i].lastName } 
                    ${ employeeRoster[i].idNumber } 
                    $${ employeeRoster[i].annualSalary } 
                    <button class="removeEmployeeButton" data-index="${i}"> Remove Employee </button></li>`);

        salaryValue += Number(employeeRoster[i].annualSalary);
    }
    el = $( '#salaryValueOut' );
    el.empty();
    el.append( ( salaryValue/12 ).toFixed( 2 ) );
    if ( salaryValue/12 > 20000) {
        $('#colorSalary').css( 'background-color', 'red');
    } 
    else {
        $( '#colorSalary').css( 'background-color', 'white');
    }
}//end for displayEmployeeRoster
//display Salary Totl Value
// *calculate monthly costs, 
//  *append information to the DOM 
// calculate monthly costs and append this to the to DOM. 
//If the total monthly cost exceeds $20,000, 


// add a red background color to the total monthly cost.
// ( .css( 'background-color, red', 'red'))
//  Create a delete button for each employee (click handler onReady) that 
//  removes an employee from the DOM. 
function removeEmployee(){
console.log('in removeEmployee');
//remove from DOM
//$( this ).parent().remove();


//remove from employeeRoster and update total salary value
 console.log($( this ).data( 'index' ) );
 //splice item out of inventory
 employeeRoster.splice( $( this ).data( 'index' ), 1);
displayEmployeeRoster();
} //end removeEmployee
//  For Base mode, it does **not** need to remove that
//  Employee's salary from the reported total.