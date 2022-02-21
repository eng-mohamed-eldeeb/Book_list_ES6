let bookArray = [];
export default class Book {
  constructor() {
    return this;
  }

  creation(title, author) {
    this.title = title;
    this.author = author;
  }

  addToLocalStorage() {
    const Current = localStorage.getItem('books');
    if (!Current) {
      bookArray.push(this);
      const newList = JSON.stringify(bookArray);
      localStorage.setItem('books', newList);
    } else {
      bookArray = JSON.parse(Current);
      bookArray.push(this);
      const newList = JSON.stringify(bookArray);
      localStorage.setItem('books', newList);
    }
  }

  deleteBook(i) {
    this.i = i;
    let currentBooks = localStorage.getItem('books');
    currentBooks = JSON.parse(currentBooks);
    currentBooks.splice(this.i, 1);
    currentBooks = JSON.stringify(currentBooks);
    localStorage.setItem('books', currentBooks);
    show();
  }
}