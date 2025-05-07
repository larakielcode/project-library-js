const bookLibrary = []; // this will store all the books
const emptyFields = []; // this will store fields that are empty in validation
const saveBookBtn = document.querySelector("#add-book-button");
const bookTitle = document.querySelector('#book-title');
const bookAuthor = document.querySelector('#book-author');
const bookPages = document.querySelector('#book-pages');
let isReadStatus = document.querySelector('#book-read');

saveBookBtn.addEventListener('click', createBookEntry);

function createBookEntry() {



    isReadStatus = (isReadStatus.checked) ? true : false;


    /* Start form validation */
    if (formValidation() === false) {
        for (const key in emptyFields) {
            console.log(emptyFields[key]);
            emptyFields[key].style.border = '0.15rem solid red';
        }
    } else {

        // Initialize book
        const newBookEntry = new Book(bookTitle.value, bookAuthor.value, parseInt(bookPages.value), isReadStatus);

        newBookEntry.addBookToLibrary(); // create the book and save to the array
        /* console.clear(); */
        console.table(bookLibrary);
        closeModal();
    }

}

// create the book construction
function Book(title, author, pages, readStatus) {
    if (!new.target) { throw Error("You should use NEW in creating Book object"); }
    const bookid = '';

    this.bookid = crypto.randomUUID(); // generate a unique id for the bookx
    this.title = title;
    this.author = author;
    this.pages = typeof pages === 'number' ? pages : 0;
    this.readStatus = typeof readStatus === 'boolean' ? readStatus : false;
}

Book.prototype.addBookToLibrary = function () {
    bookLibrary.push({
        bookid: this.bookid,
        title: this.title,
        author: this.author,
        pages: parseInt(this.pages),
        readStatus: this.readStatus
    });
}

function formValidation() {

    if (bookTitle.value == '') {
        emptyFields.push(bookTitle);
    } else {
        bookTitle.style.border = 'none';
    }
    if (bookAuthor.value == '') {
        emptyFields.push(bookAuthor);
    }
    if (bookPages.value == '') {
        emptyFields.push(bookPages);
    }

    if (emptyFields.length > 0) {
        return false;
    } else {
        return true;
    }
}

