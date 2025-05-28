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
    (classbtn == 'readbtn') ? readStatusBtn.textContent = 'read' : readStatusBtn.textContent = 'unread';
  }
}

const book = new Books('test books', 'aldin moreno', '333', false);
const book1 = new Books('dummies book', 'zeke moreno', '143', true);
const book2 = new Books('ambot book', 'lotlot moreno', '22', false);
book.addBookToShelf();
book1.addBookToShelf();
book2.addBookToShelf();
console.log("\n--- Current Books on Shelf ---");
bookShelf.forEach((book, index) => {
  console.log(`${index + 1}. ${book.getBookInfo()}`);
});