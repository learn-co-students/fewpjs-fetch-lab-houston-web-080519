function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
          .then(function(response){
              return response.json()
          })
          .then(function(result){
            renderBooks(result)
          })
}


  

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerText = book.name
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
