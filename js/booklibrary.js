const bookLibrary = []; // this will store all the books
const emptyFields = []; // this will store fields that are empty in validation
const saveBookBtn = document.querySelector("#add-book-button");
const bookTitle = document.querySelector("#book-title");
const bookAuthor = document.querySelector("#book-author");
const bookPages = document.querySelector("#book-pages");

saveBookBtn.addEventListener("click", createBookEntry);

function createBookEntry() {
    let isReadStatus = document.querySelector("#book-read");

    /* Start form validation */
    let validate = formValidation();

    if (validate === false) {
        errorDisplay.style.display = "block";
    } else {

        isReadStatus = isReadStatus.checked ? true : false;
        // Initialize book
        const newBookEntry = new Book(
            bookTitle.value,
            bookAuthor.value,
            parseInt(bookPages.value),
            isReadStatus
        );

        newBookEntry.addBookToLibrary(); // create the book and save to the array
        /* console.clear(); */
        console.table(bookLibrary);
        closeModal();
    }
}

// create the book construction
function Book(title, author, pages, readStatus) {
    if (!new.target) {
        throw Error("You should use NEW in creating Book object");
    }
    const bookid = "";

    this.bookid = crypto.randomUUID(); // generate a unique id for the bookx
    this.title = title;
    this.author = author;
    this.pages = typeof pages === "number" ? pages : 0;
    this.readStatus = typeof readStatus === "boolean" ? readStatus : false;
}

Book.prototype.addBookToLibrary = function () {
    bookLibrary.push({
        bookid: this.bookid,
        title: this.title,
        author: this.author,
        pages: parseInt(this.pages),
        readStatus: this.readStatus,
    });
};

function formValidation() {
    let index;

    if (bookTitle.value == "") {
        if (!emptyFields.includes(bookTitle)) {
            emptyFields.push(bookTitle);
        }
    } else {
        index = emptyFields.indexOf(bookTitle);
        if (index > -1) {
            emptyFields.splice(index, 1);
        }
    }
    if (bookAuthor.value == "") {
        if (!emptyFields.includes(bookAuthor)) {
            emptyFields.push(bookAuthor);
        }
    } else {
        index = emptyFields.indexOf(bookAuthor);
        if (index > -1) {
            emptyFields.splice(index, 1);
        }
    }
    if (bookPages.value == "") {
        if (!emptyFields.includes(bookPages)) {
            emptyFields.push(bookPages);
        }
    } else {
        index = emptyFields.indexOf(bookPages);
        if (index > -1) {
            emptyFields.splice(index, 1);
        }
    }
    if (emptyFields.length > 0) {
        return false;
    } else {
        return true;
    }
}
