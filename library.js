console.log('connected');
const myLibrary = [];
const loadTest = document.querySelector('.test');
const newBook = document.querySelector('#book');
const bookList = document.querySelector('.bookList');


const testData = [
    ['A háromtest-probléma', 'Cixin Liu', 201, false],
    ['A sötét erdő', 'Cixin Liu', 202, false],
    ['A halál vége', 'Cixin Liu', 203, true],
    ['Kritikus rendszerhiba', 'Martha Wells', 100, false]
]
function capitalize(anyText) {
    let capitalized;
    let newItem;
    const textArray = anyText.split(' ');
    const newArray = [];
    textArray.forEach(item => {
        newItem = item[0].toUpperCase() + item.slice(1);
        newArray.push(newItem);
    });
    capitalized = newArray.join(' ');
    return capitalized;
}
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        let bookInfo = capitalize(this.title);
        bookInfo += ` <em>by</em> ${capitalize(this.author)},`;
        bookInfo += ` ${this.pages} pages, `;
        bookInfo += this.read ? 'you have read.' : 'not read yet.';
        return bookInfo;
    }
}
function addBookToLibrary(title, author, pages, read) {
    return new Book(title, author, pages, read);
}

function listLibrary() {
    myLibrary.forEach(element => {
        console.log(element.info());
    });
}
function newLine(element) {
    let newLine = document.createElement('li');
    newLine.innerHTML = `
    <p>${element.info()}</p>
    <p><input type='checkbox' ${element.read ? 'checked' : ''}></p>
    `;
    bookList.appendChild(newLine);

}
loadTest.addEventListener('click', () => {
    console.log('TEST clicked');
    testData.forEach(item => {
        myLibrary.push(addBookToLibrary(item[0], item[1], item[2], item[3]));
    });
    myLibrary.forEach(item => newLine(item));
});
newBook.addEventListener('submit', (e) => {
    e.preventDefault();
    myLibrary.push(addBookToLibrary(e.target.title.value, e.target.author.value, e.target.pages.value, false));
    newLine(myLibrary[myLibrary.length - 1]);
    listLibrary();
    e.target.title.value = '';
    e.target.author.value = '';
    e.target.pages.value = '';
});

