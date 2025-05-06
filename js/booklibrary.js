const bookLibrary = []; // this will store all the books

const saveBookBtn = document.querySelector("#add-book-button");

saveBookBtn.addEventListener('click', createBookEntry);

function createBookEntry() {

    const bookTitle = document.querySelector('#book-title').value;
    const bookAuthor = document.querySelector('#book-author').value;
    const bookYear = document.querySelector('#book-year').value;
    let isReadStatus = document.querySelector('#book-read');

    isReadStatus = (isReadStatus.checked) ? true : false;

    const newBookEntry = new Book(bookTitle, bookAuthor,);
}

// create the book construction
function Book(title, author, pages, readStatus = Boolean) {
    if (!new.target) { throw Error("You should use NEW in creating Book object"); }
    const bookid = '';

    this.bookid = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = typeof pages === 'number' ? pages : 0;
    this.readStatus = typeof readStatus === 'boolean' ? readStatus : false;

    this.getBookData = function () {
        return `${this.bookid} , ${this.title}, ${this.author}, ${this.pages}, ${this.readStatus}`;
    }
}

function addBookToLibrary(obj) {
    const [bookid, title, author, pages, readStatus] = obj.split(',');
    bookLibrary.push({
        bookid: bookid,
        title: title,
        author: author,
        pages: parseInt(pages),
        readStatus: readStatus
    });
}

const newBook = new Book("Sample Title", "Aldin Moreno", 250, true);
const book2 = new Book("Test Sample 2", "Zeke Moreno", 100, false);

addBookToLibrary(newBook.getBookData());
addBookToLibrary(book2.getBookData());
console.log(bookLibrary);
