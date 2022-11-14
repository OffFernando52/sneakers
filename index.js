fetch('https://ghibliapi.herokuapp.com/films')
.then(resp => resp.json())
.then(data => console.log(data))


