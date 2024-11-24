function getFormvalue() {
    //Write your code here
	const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
	const fullName = firstName + ' ' + lastName;

    // Display the full name in an alert
    alert(fullName);
}
