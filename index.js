// Add your code here
function submitData(name, email) {
    const formData = {
      name: name,
      email: email
    };
  
    const configObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData)
    };
  
    return fetch('http://localhost:3000/users', configObj)
      .then(response => {
        return response.json();
      })
      .then(data => {
        const id = data.id;
        const idElement = document.createElement('p');
        idElement.textContent = id;
        document.body.appendChild(idElement);
      })
      .catch(error => {
        const errorMessage = error.message;
        const errorElement = document.createElement('p');
        errorElement.textContent = errorMessage;
        document.body.appendChild(errorElement);
      });
  }