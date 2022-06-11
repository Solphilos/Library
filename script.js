let myLibrary = [];
let cardArray = [];



function Book(title, author, pages) {            
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
           cardArray.push(myLibrary[i][key])
        }
        btitle = cardArray[0];
        bauthor = cardArray[1];
        bpages = cardArray[2];
        populateCards(btitle, bauthor, bpages);
    }
    
}

function populateCards(title, author, pages) {
    const card = document.createElement('div');                         // creates new divs and populates them with array objects
    card.classList.add('cards');
    const tit = document.createElement('div');
    tit.classList.add('title');
    const auth = document.createElement('div');                        // an error here sends all data to the first newly created div. must fix
    auth.classList.add('author');
    const pag = document.createElement('div');
    pag.classList.add('pages');
    tit.innerHTML = title;  
    auth.innerHTML = author;
    pag.innerHTML = pages;                                          
    document.querySelector('.book_cards').appendChild(card);
    card.appendChild(tit);      
    card.appendChild(auth);
    card.appendChild(pag);
    const remove = document.createElement('button');
    remove.setAttribute('id', 'remove');
    remove.textContent = 'Remove';
    card.appendChild(remove);
    remove.addEventListener('click', function() {card.remove()})
    
}

function getValues() {                                             // gets values from text inputs and uses them as arguments in the addToLibrary function
    let title = document.getElementById('title').value; 
    let auth = document.getElementById('author').value; 
    let page = document.getElementById('pages').value;
    addToLibrary(title, auth, page);
    resetValues();
}

function resetValues() {                                      // to empty array in order to start a new book object and accompanying card div
    myLibrary = [];
    cardArray = [];
    document.getElementById('add_new').style.display = 'none'; 
}
  

//document.getElementById('submit').addEventListener('click', getValues)     // make and onclick function to perform these actions
//document.getElementById('submit').addEventListener('click', resetValues)

document.getElementById('new').addEventListener('click', function () {
    document.getElementById('add_new').style.display = 'flex';
    
})


document.getElementById('close').addEventListener('click', () => document.getElementById('add_new').style.display = 'none');