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

}

function displayBooks() {
  const mainContainer = document.querySelector('.main-container');
  const bookDivContainer = document.createElement('div');
  const bookTitle = document.createElement('p');
  const bookAuthor = document.createElement('p');
  const bookPages = document.createElement('p');
  const bookHasRead = document.createElement('p');
  const readStatusBtn = document.createElement('button');

  mainContainer.appendChild(bookDivContainer);
  bookDivContainer.classList.add('book-entry-container');
  bookDivContainer.appendChild(bookTitle);
  bookDivContainer.appendChild(bookPages);
  bookDivContainer.appendChild(bookAuthor);
  bookDivContainer.appendChild(bookHasRead);
  bookHasRead.appendChild(readStatusBtn);

  for (const key in bookShelf) {
    bookTitle.textContent = bookShelf[key]['title'];
    bookAuthor.textContent = bookShelf[key]['author'];
    bookPages.textContent = bookShelf[key]['pages'];
    let classbtn = (bookShelf[key]['hasRead'] == true) ? 'readbtn' : 'unreadbtn';
    readStatusBtn.setAttribute('class', classbtn);
    readStatusBtn.setAttribute('id', 'readStatusButton');
    readStatusBtn.setAttribute('data-book-id', bookShelf[key]['bookId']);
    (classbtn == 'readbtn') ? readStatusBtn.textContent = 'read' : readStatusBtn.textContent = 'unread';
  }

  const allButtons = document.querySelectorAll('#readStatusButton');
  allButtons.forEach(btns => btns.addEventListener('click', setButtonStatus));
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

  addbook.onclick = () => {
    const myForm = document.querySelector('form');
    const child = myForm.childNodes;

    for (const element of child) {
      console.log(element);
    }

  }

}

start();