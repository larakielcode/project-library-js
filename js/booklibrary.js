const bookLibrary = []; // this will store all the books
const emptyFields = []; // this will store fields that are empty in validation
const saveBookBtn = document.querySelector("#add-book-button");
const bookTitle = document.querySelector("#book-title");
const bookAuthor = document.querySelector("#book-author");
const bookPages = document.querySelector("#book-pages");

const mainContainer = document.querySelector(".main-container");

saveBookBtn.addEventListener("click", createBookEntry);

displayBook();

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
    //console.table(bookLibrary);
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
    bookid: this.bookid.toLowerCase(),
    title: this.title.toLowerCase(),
    author: this.author.toLowerCase(),
    pages: parseInt(this.pages),
    readStatus: this.readStatus,
  });
  displayBook();
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

function displayBook() {
  const bookDivContainer = document.createElement("div");
  const bookTitlePara = document.createElement("p");
  const bookPagesPara = document.createElement("p");
  const bookAuthorPara = document.createElement("p");
  const readStatusContainer = document.createElement("p");
  const readStatusBtn = document.createElement("button");

  if (bookLibrary.length > 0) {

    mainContainer.appendChild(bookDivContainer);
    bookDivContainer.classList.add("book-entry-container");
    bookDivContainer.appendChild(bookTitlePara);
    bookDivContainer.appendChild(bookPagesPara);
    bookDivContainer.appendChild(bookAuthorPara);
    bookDivContainer.appendChild(readStatusContainer);
    readStatusContainer.appendChild(readStatusBtn);
    readStatusBtn.setAttribute('type', 'button');

    for (const key in bookLibrary) {
      bookTitlePara.textContent = bookLibrary[key].title;
      bookPagesPara.textContent = bookLibrary[key].pages;
      bookAuthorPara.textContent = bookLibrary[key].author;
      readStatusBtn.setAttribute('data-id',bookLibrary[key].bookid);
      readStatusBtn.setAttribute('id', 'readStatusButton');
      let classbtn = setClassBtn(bookLibrary[key].readStatus);
      readStatusBtn.setAttribute('class',classbtn);
      classbtn = (classbtn == 'readbtn') ? 'read' : 'unread';
      readStatusBtn.innerHTML = classbtn;
      
    }
  } else {
    
  }
  
const allButtons = document.querySelectorAll('#readStatusButton');

allButtons.forEach(btns => btns.addEventListener('click', setButtonStatus));

}

function setButtonStatus() {

  for (const key in bookLibrary) {
     if (bookLibrary[key].bookid.includes(this.dataset.id)) {
      if (this.className == 'readbtn') {
        bookLibrary[key].readStatus = false;
        this.className = 'unreadbtn';
        this.innerHTML = 'unread';
      } else {
        bookLibrary[key].readStatus = true;
        this.className = 'readbtn';
        this.innerHTML = 'read';
      }
    } 
  }
}

function setClassBtn (status) {
  return status = (status === true) ? 'readbtn' : 'unreadbtn';
}