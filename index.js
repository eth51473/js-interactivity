console.log('hello world')
const message = document.querySelector('#message')
  

function addMovie(e){
  e.preventDefault()

  const movie = document.createElement('li');
  const movieTitle = document.createElement('span')
  const inputField = document.querySelector('input')
  movieTitle.textContent = inputField.value
  movieTitle.addEventListener('click', crossOffMovie)
  movie.appendChild(movieTitle)
  const deleteBtn = document.createElement('button')
  deleteBtn.textContent ="X"
  deleteBtn.addEventListener('click',deleteMovie)
  movie.appendChild(deleteBtn)
  document.querySelector('ul').appendChild(movie)
  inputField.value = ""
}
document.querySelector('form').addEventListener('submit',addMovie)

function deleteMovie(e){
  e.target.parentNode.remove()
  message.textContent = "Movie Deleted!"
}

function crossOffMovie(e){
  e.target.classList.toggle('checked')
  if(e.target.classList.contains('checked')){
    message.textContent = "Movie Watched"
  }else{
    message.textContent = "Movie added back"
  }

}