let myLibrary = [];

function Book(title, author, pages) {    
    this.title = title
    this.author = author
    this.pages = pages
}

function addToLibrary(obj, title, author, pages) {      // takes objects created by the Book constructor and adds them to the myLibrary array.
     obj = new Book(title, author, pages);              // figure out how to take values from text input fields
    myLibrary.push(book);
}

function displayBooks() {                         // loops through myLibrary array and displays each object
    myLibrary.forEach(newFunc);
    function newFunc() {
        alert()
    }
}


 
////////////////////////////////////////////  

function returnUserInput() {
    
    document.getElementById('book_title').innerHTML = document.getElementById('title').value;       // displays the value of text inputs on screen. 
    document.getElementById('book_auth').innerHTML = document.getElementById('author').value;       // modify this to make text inputs use addToLibrary...
    document.getElementById('book_pages').innerHTML = document.getElementById('pages').value;       // ... function to construct book objects and send to array
}


document.getElementById('submit').addEventListener('click', returnUserInput)




