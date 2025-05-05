const bookLibrary = []; // this will store all the books

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
