// your code here
function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission
    const name = document.getElementById('name').value; // Get the value of the name input
    const year = document.getElementById('year').value; // Get the value of the year input
	console.log(`Name: ${name}, Year: ${year}`); // Log the values to the console
    alert(`Submitted Name: ${name}, Year: ${year}`); // Alert with the submitted values
    }