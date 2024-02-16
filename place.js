fetch('http://localhost:3030/v1/todos/alltodos')
      .then(response => response.json())
      .then(json => console.log(json))