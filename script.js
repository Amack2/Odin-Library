// All of your book objects are going to be stored in a simple array, so add a function to the script (not the constructor) that can take user’s input and store the new book objects into an array.

numberOfBooks = 0;
let myLibrary = [];

// DOM Objects

const addBookBtn = document.querySelector('.addBtn');
const addBookModal = document.querySelector('#addBookModal');
const newBookForm = document.querySelector('.newBookInput');
const submitBookBtn = document.querySelector('#submitBookBtn');

const authorInput = document.getElementById('authorInput');
const titleInput = document.getElementById('titleInput');
const pageCountInput = document.getElementById('pageCountInput');
const bookGrid = document.querySelector('.bookGrid');

//this is the constructor:
function Book(title, author, pageCount, readStatus) {
  this.title = title;
  this.author = author;
  this.pageCount = pageCount;
  this.readStatus = readStatus;
}

addBookBtn.addEventListener('click', openAddBook);

function openAddBook() {
  newBookForm.reset();
  addBookModal.showModal();
  console.log('window opens');
}

submitBookBtn.addEventListener('click', () => {
  addBookToLibrary();
});

addBookToLibrary = () => {
  let author = authorInput.value;
  let title = titleInput.value;
  let pageCount = pageCountInput.value;
  let readStatus = getReadValue();

  let newBook = new Book(title, author, pageCount, readStatus);
  myLibrary.push(newBook);

  createBookCard(title, author, pageCount, readStatus);
};

const checkbox = document.querySelector('#RSCheck');

function getReadValue() {
  const checkbox = document.querySelector('#RSCheck');
  console.log(checkbox.checked);
  if (checkbox.checked == true) {
    return (readStatus = 'true');
  } else {
    return (readStatus = 'false');
  }
}

function createBookCard(title, author, pageCount, readStatus) {
  let bookCard = document.createElement('div');
  bookCard.classList.add('bookCard');
  bookGrid.appendChild(bookCard);

  let bookCardTitle = document.createElement('div');
  bookCardTitle.classList.add('bookCardTitle');
  bookCard.appendChild(bookCardTitle);
  bookCardTitle.innerHTML = 'Title: ' + title;

  let bookCardAuthor = document.createElement('div');
  bookCardAuthor.classList.add('bookCardAuthor');
  bookCard.appendChild(bookCardAuthor);
  bookCardAuthor.innerHTML = 'Author: ' + author;

  let bookCardPageCount = document.createElement('div');
  bookCardPageCount.classList.add('bookCardPageCount');
  bookCard.appendChild(bookCardPageCount);
  bookCardPageCount.innerHTML = 'Page Count: ' + pageCount;

  const BCToggleContainer = document.createElement('div');
  BCToggleContainer.classList.add('readToggle');
  bookCard.append(BCToggleContainer);

  if (this.readStatus == 'true') {
    BCToggleContainer.classList.add('yes');
  }

  BCToggleContainer.addEventListener('click', () => {
    BCToggleContainer.classList.toggle('yes');
    console.log(title);
    title = 'no';
    return;
  });

  let BCIconContainer = document.createElement('div');
  BCIconContainer.classList.add('iconContainer');
  bookCard.append(BCIconContainer);

  let BCIconBook = document.createElement('span');
  BCIconBook.classList.add('material-symbols-outlined');
  BCIconBook.innerHTML = 'Book';
  BCIconContainer.append(BCIconBook);

  let BCIconShare = document.createElement('span');
  BCIconShare.classList.add('material-symbols-outlined');
  BCIconShare.innerHTML = 'share';
  BCIconContainer.append(BCIconShare);

  let BCIconClose = document.createElement('span');
  BCIconClose.classList.add('material-symbols-outlined');
  BCIconClose.innerHTML = 'close';
  BCIconContainer.append(BCIconClose);
}
