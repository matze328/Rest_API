
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))



fetch('http://localhost:3030/v1/todos/alltodos')
      .then(response => response.json())
      .then(json => console.log(json))

 fetch("http://localhost:3030/v1/todos/byuserid?userId=1")
      .then((wasauchimmer) => wasauchimmer.json())
      .then((json) => console.log(json));
