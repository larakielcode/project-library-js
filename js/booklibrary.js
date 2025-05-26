const bookShelf = [];

class Books {

  constructor(title, author, pages, hasRead) {
    this.bookId = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
  }

  getBooks() {
    return `bookId:${this.bookId},title:${this.title},author:${this.author},pages:${this.pages},hasRead:${this.hasRead}`;
  }

  saveBooks() {
    const pairs = this.getBooks().split(',');
    const results = [];
    for (const pair of pairs) {
      const [key, value] = pair.split(':');
      results.push({ [key]: value });
    }
    bookShelf.push(results);
  }
}