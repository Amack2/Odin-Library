// All of your book objects are going to be stored in a simple array, so add a function to the script (not the constructor) that can take user’s input and store the new book objects into an array.

let myLibrary = [];

// DOM Objects

//items for the modal
const addBookBtn = document.querySelector('.addBtn');
const addBookModal = document.querySelector('#addBookModal');
const newBookForm = document.querySelector('.newBookInput');
const submitBookBtn = document.querySelector('#submitBookBtn');

const authorInput = document.getElementById('authorInput');
const titleInput = document.getElementById('titleInput');
const pageCountInput = document.getElementById('pageCountInput');
const checkbox = document.querySelector('#RSCheck');

//items in the page
const bookGrid = document.querySelector('.bookGrid');

// items in the book card:

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

const getBookInfo = () => {
  let author = authorInput.value;
  let title = titleInput.value;
  let pageCount = pageCountInput.value;

  if (checkbox.checked == true) {
    readStatus = 'true';
  } else {
    readStatus = 'false';
  }

  return new Book(title, author, pageCount, readStatus);
};

addBookToLibrary = () => {
  let author = authorInput.value;
  let title = titleInput.value;
  let pageCount = pageCountInput.value;

  if (author === '' || title === '' || pageCount === '') {
    return;
  } else {
    const newBook = getBookInfo();
    myLibrary.push(newBook);
    updateBookGrid();
  }
};

function updateBookGrid() {
  resetBookGrid();
  for (let book of myLibrary) {
    createBookCard(book);
  }
}

function resetBookGrid() {
  bookGrid.innerHTML = '';
}

const createBookCard = (book) => {
  const bookCard = document.createElement('div');
  const bookCardTitle = document.createElement('div');
  const bookCardAuthor = document.createElement('div');
  const bookCardPageCount = document.createElement('div');
  const BCToggleContainer = document.createElement('div');
  const BCIconContainer = document.createElement('div');
  const BCIconBook = document.createElement('span');
  const BCIconShare = document.createElement('span');
  const BCIconClose = document.createElement('span');

  bookCard.classList.add('bookCard');
  bookGrid.appendChild(bookCard);

  bookCardTitle.classList.add('bookCardTitle');
  bookCard.appendChild(bookCardTitle);
  bookCardTitle.innerHTML = 'Title: ' + book.title;

  bookCardAuthor.classList.add('bookCardAuthor');
  bookCard.appendChild(bookCardAuthor);
  bookCardAuthor.innerHTML = 'Author: ' + book.author;

  bookCardPageCount.classList.add('bookCardPageCount');
  bookCard.appendChild(bookCardPageCount);
  bookCardPageCount.innerHTML = 'Page Count: ' + book.pageCount;

  BCToggleContainer.classList.add('readToggle');
  bookCard.append(BCToggleContainer);
  if (book.readStatus == 'true') {
    BCToggleContainer.classList.add('true');
  }

  BCToggleContainer.addEventListener('click', () => {
    if (book.readStatus == 'true') {
      book.readStatus = 'false';
      BCToggleContainer.classList.remove('true');
    } else if (book.readStatus == 'false') {
      book.readStatus = 'true';
      BCToggleContainer.classList.add('true');
    }
    updateBookGrid();
  });

  BCIconContainer.classList.add('iconContainer');
  bookCard.append(BCIconContainer);

  BCIconBook.classList.add('material-symbols-outlined');
  BCIconBook.innerHTML = 'Book';
  BCIconContainer.append(BCIconBook);

  BCIconShare.classList.add('material-symbols-outlined');
  BCIconShare.innerHTML = 'share';
  BCIconContainer.append(BCIconShare);

  BCIconClose.classList.add('material-symbols-outlined');
  BCIconClose.innerHTML = 'close';
  BCIconContainer.append(BCIconClose);

  BCIconClose.addEventListener('click', () => {
    console.log(myLibrary.indexOf(book));
    const id = myLibrary.indexOf(book);
    const removedBook = myLibrary.splice(id, 1);
    updateBookGrid();
  });
};

// used for testing layout
function addBooks(numberOfBooks) {
  x = numberOfBooks;
  for (let i = 1; i <= x; i++) {
    let title = i;
    let author = i;
    let pageCount = i;
    let readStatus = i;
    new Book(title, author, pageCount, readStatus);
    myLibrary.push(Book);
    updateBookGrid();
  }
}
