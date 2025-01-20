function handleSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const year = document.getElementById('year').value; 
	let url = 'https://localhost:8080/';
	alert(`${url}`);
	if (name || year) {
          const params = new URLSearchParams();
          if (name) params.append('name', name);
          if (year) params.append('year', year);

          // Append query string to the URL
          url += `?${params.toString()}`;
        }

        // Update the URL in the h3 element
        document.getElementById('url').textContent = url;

}