function getFormvalue() {
    //Write your code here
	const firstName = document.getElementById('fname').value;
    const lastName = document.getElementById('lname').value;
	const fullName = firstName + ' ' + lastName;

    // Display the full name in an alert
    alert(fullName);
}
