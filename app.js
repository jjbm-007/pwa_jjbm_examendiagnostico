  fetch('https://reqres.in/api/users?page=2')
    .then(response => response.json())
    .then(dataRespuesta => {
        var contenedor = document.getElementById("data")
        dataRespuesta.data.forEach(element => {
            let tr = document.createElement('tr')

            let name = document.createElement('td')
            let email = document.createElement('td')
            let avatar = document.createElement('img')

            name.textContent = element.first_name + ' ' + element.last_name 
            email.textContent = element.email
            name.setAttribute('class', 'text-danger')

            avatar.setAttribute('src', element.avatar)
            tr.append(name)
            tr.append(email)
            tr.append(avatar)
            
            contenedor.append(tr)
        });
    });

  function registrar() {
    
    let data = {
      name: document.getElementById("name").value,
      job: document.getElementById("job").value
    }

    fetch('https://reqres.in/api/users', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json; charset=UTF-8" }
    })
    .then(response => response.json())
    .catch(error => console.error('Error: ', error))
    .then(response => console.log('Success: ', response))

    alert("Registro exitoso, revisar consola.");

  }
