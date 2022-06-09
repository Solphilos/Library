let myLibrary = [];
let cardArray = [];

function Book(title, author, pages) {               ///////// Work with displayBooks function, figure out how to display each individual library object!!! /////
    this.title = title
    this.author = author
    this.pages = pages
}

function addToLibrary(title, author, pages) {                      // takes objects created by the Book constructor and adds them to the myLibrary array.
   myLibrary.push(new Book(title, author, pages));               
   displayBooks();                                                // displays library objects in book_card div, a new card for each entry/book 
}

function displayBooks() {                                         // loops through myLibrary array and displays each object
    for (let i = 0; i < myLibrary.length; i++) {              
           for(let key in myLibrary[i]) {                          
           //populateCards(myLibrary[i][key]);
           cardArray.push(myLibrary[i][key])
        }
        populateCards(cardArray)
    }
}

function populateCards(bookObj) {
    const e = document.createElement('div');                         // creates a new div with class .cards nad populates them with array objects
    e.classList.add('cards');
    e.innerHTML = bookObj;
    document.querySelector('.book_cards').appendChild(e);
    const remove = document.createElement('button');
    remove.setAttribute('id', 'remove');
    remove.textContent = 'Remove';
    e.appendChild(remove);
    remove.addEventListener('click', function() {e.remove()})
    
}

function getValues() {                                             // gets values from text inputs and uses them as arguments in the addToLibrary function
    let title = document.getElementById('title').value; 
    let auth = document.getElementById('author').value; 
    let page = document.getElementById('pages').value;
    addToLibrary(title, auth, page);
}

function resetValues() {                                      // to empty array in order to start a new book object and accompanying card div
    myLibrary = [];
    cardArray = [];
    document.getElementById('add_new').style.display = 'none'; 
}
  

document.getElementById('submit').addEventListener('click', getValues)
document.getElementById('submit').addEventListener('click', resetValues)

document.getElementById('new').addEventListener('click', function () {
    document.getElementById('add_new').style.display = 'flex';
})


