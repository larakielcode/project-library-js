const bookLibrary = []; // this will store all the books

// create the book construction
function Book(title, author, pages, readStatus = Boolean) {
    if (!new.target) { throw Error("You should use NEW in creating Book object"); }

    this.title = title;
    this.author = author;
    this.pages = typeof pages === 'number' ? pages : 0;
    this.readStatus = typeof readStatus === 'boolean' ? readStatus : false;    
}

Book.prototype.saveBook = function () {
    bookLibrary.push(this);
}

let getBook = function () {
    for (const key in bookLibrary) {
        if (Object.prototype.hasOwnProperty.call(object, key)) {bookLibrary element = object[key];
 bookLibrary
        }
    }
}

const newBook = new Book("Sample Title", "Aldin Moreno", 250 , true);
const book2 = new Book("Test Sample 2", "Zeke Moreno", 100 , false);
newBook.saveBook();
book2.saveBook();
console.log(getBook());
//console.log(bookLibrary);