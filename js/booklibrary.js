const bookShelf = [];

class Books {

  constructor(title, author, pages, hasRead) {
    this.bookId = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
  }

  addBookToShelf() {
    bookShelf.push(this);
    displayBooks(this);
  }

  getBookInfo() {
    return `bookId:${this.bookId},title:${this.title},author:${this.author},pages:${this.pages},hasRead:${this.hasRead}`;
  }

  removeEntry() {
    const bookIdToRemove = this.dataset.bookId;
    const index = bookShelf.findIndex(book => book.bookId === bookIdToRemove);

    if (index !== -1) {
      bookShelf.splice(index, 1);
      displayBooks();
    }

  }

}

function displayBooks() {
  const mainContainer = document.querySelector('.main-container');

  // clear the container
  mainContainer.innerHTML = '';

  bookShelf.forEach(book => {
    const bookDivContainer = document.createElement('div');
    const bookTitle = document.createElement('p');
    const bookAuthor = document.createElement('p');
    const bookPages = document.createElement('p');
    const bookHasRead = document.createElement('div');
    const readStatusBtn = document.createElement('button');

    mainContainer.appendChild(bookDivContainer);
    bookDivContainer.classList.add('book-entry-container');

    bookTitle.textContent = book.title;
    bookAuthor.textContent = book.author;
    bookPages.textContent = book.pages;

    let classbtn = (book.hasRead === true) ? 'readbtn' : 'unreadbtn';
    readStatusBtn.setAttribute('class', classbtn);
    readStatusBtn.setAttribute('id', 'readStatusButton');
    readStatusBtn.setAttribute('data-book-id', book.bookId);
    readStatusBtn.textContent = (book.hasRead === true) ? 'Read' : 'Unread';

    readStatusBtn.addEventListener('click', setButtonStatus);

    bookDivContainer.appendChild(bookTitle);
    bookDivContainer.appendChild(bookPages);
    bookDivContainer.appendChild(bookAuthor);
    bookDivContainer.appendChild(bookHasRead);
    bookHasRead.appendChild(readStatusBtn);

    // Add a remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove book';
    removeButton.classList.add('remove-btn');
    bookHasRead.appendChild(removeButton);
    removeButton.setAttribute('data-book-id', book.bookId);
    removeButton.addEventListener('click', book.removeEntry);
  });
}

function setButtonStatus() {

  for (const key in bookShelf) {
    if (bookShelf[key].bookId.includes(this.dataset.bookId)) {
      console.log(bookShelf[key]);
      (bookShelf[key]['hasRead'] === false) ? bookShelf[key]['hasRead'] = true : bookShelf[key]['hasRead'] = false;
      console.log(bookShelf[key]);
      if (this.className == 'unreadbtn') {
        this.className = 'readbtn';
        this.textContent = 'read';
      } else {
        this.className = 'unreadbtn';
        this.textContent = 'unread';
      }
    }
  }
}

function start() {

  const addbook = document.querySelector('#add-book-button');

  addbook.addEventListener('click', () => {
    const myForm = document.querySelector('form');
    const titleInput = document.querySelector('#book-title');
    const authorInput = document.querySelector('#book-author');
    const pagesInput = document.querySelector('#book-pages');
    const hasReadInput = document.querySelector('#book-read');

    const validationResult = formValidate(titleInput, authorInput, pagesInput)
    if (validationResult) {
      const newBook = new Books(
        titleInput.value,
        authorInput.value,
        pagesInput.value,
        hasReadInput.checked
      );
      newBook.addBookToShelf();

      //clear the fields
      titleInput.value = '';
      authorInput.value = '';
      pagesInput.value = '';
      hasReadInput.checked = false;
    }

    closeModal();

  });
}

function formValidate(...args) {
  const errMsg = document.querySelector('.errorMessage');
  let isFormValid = true;
  args.forEach(input => {
    if (input.value.trim() === '') {
      isFormValid = false;
    }
  });

  if (!isFormValid) {
    errMsg.style.display = 'block';
  }

  return isFormValid;

}
/* 
const book = new Books('The Dummy Title', 'Aldin Moreno', '333', false);
const book1 = new Books('The Quick Brown Fox Jumps Over Dog', 'Aldin Moreno', '333', false);
book.addBookToShelf();
book1.addBookToShelf(); */

start();