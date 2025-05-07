const mainContainer = document.querySelector('.main-container');
const bookDivContainer = document.createElement('div');
const bookTitlePara = document.createElement('p');
const bookYearPara = document.createElement('p');
const bookAuthorPara = document.createElement('p');

// Added classes to the div generated
bookDivContainer.classList.add('book-entry-container');

// Append the div to the main container
mainContainer.appendChild(bookDivContainer);
bookDivContainer.appendChild(bookTitlePara);
bookDivContainer.appendChild(bookYearPara);
bookDivContainer.appendChild(bookAuthorPara);

bookTitlePara.textContent = 'Book Title';
bookYearPara.textContent = "Published: 2025";
bookAuthorPara.textContent = "- Aldin Moreno";