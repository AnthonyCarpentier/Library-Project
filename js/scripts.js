let readReport;

let container = document.querySelector(`#container`);

let wrapper = document.querySelector(`.wrapper`);
wrapper.style.gridTemplateColumns = `repeat(3, 1fr)`;
wrapper.style.gridTemplateRows = `repeat(3, 1fr)`;




let myLibrary = [];

function books(title, author, pages, read, libraryIndex, info) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	if (read === 1) {
		readReport = `already read`;
	} else {
		readReport = `not read yet`;
	}
	this.libraryIndex = 0;
	this.info = function (string) {
	return (`` + title + ` by ` + author + `, ` + pages + ` pages, `	+ readReport);
}
}

function addBookToLibrary() {
	resetLibraryDisplay();
	
	let userBookTitle = prompt(`Please add the title of this book`);
	let userBookAuthor = prompt(`Please add the author of this book`);
	let userBookPages = prompt(`Please add the number of pages in this book`);
	let userBookReadRaw = prompt(`Have you read the book? yes or no, please`);
	let userBookRead = 0;
	switch(userBookReadRaw.toLowerCase()) {
		case `yes`:
			userBookRead = 1;
			break;
		case `no`:
			userBookRead = 0;
			break;
		default:
		userBookRead = 0;
	}

	let userBook = new books (userBookTitle, userBookAuthor, userBookPages, userBookRead);
	myLibrary.push(userBook);
	createLibraryDisplay();

}

function createLibraryDisplay () {
	for (let i = 0; i < myLibrary.length; i++) {
	let currentBook = myLibrary[i];
	currentBook.libraryIndex = i;
	
	let libraryCard = document.createElement(`div`);
	libraryCard.classList.add(`libraryCard`);
	libraryCard.setAttribute(`data-deleteIndex`, currentBook.libraryIndex);
	container.appendChild(libraryCard);

	let bookName = document.createElement(`h1`);
	bookName.textContent = currentBook.title;
	libraryCard.appendChild(bookName);

	let bookTitle = document.createElement(`div`);
	bookTitle.textContent = `Written by ` + currentBook.author;
	libraryCard.appendChild(bookTitle);

	let bookPages = document.createElement(`div`);
	bookPages.textContent = currentBook.pages + ` pages.`;
	libraryCard.appendChild(bookPages);

	if (currentBook.read === 1) {
	let bookRead = document.createElement(`div`);
	bookRead.textContent = `Has already been read.`;
	libraryCard.appendChild(bookRead);
	}
	else {
		let bookRead = document.createElement(`div`);
	bookRead.textContent = `Has not been read yet.`;
	libraryCard.appendChild(bookRead);
	}

	let bookDeleteButton = document.createElement(`button`);
	bookDeleteButton.innerHTML = `Delete this book`;
	bookDeleteButton.id = `deleteBook`;
	bookDeleteButton.setAttribute(`data-buttonDeleteIndex`, currentBook.libraryIndex);
	libraryCard.appendChild(bookDeleteButton);
	
}}

let btnNewBook = document.querySelector('#newBook');
btnNewBook.addEventListener('click', () => {
	addBookToLibrary();
});


// let btnDeleteBooks = document.querySelectorAll('button');
// btnDeleteBooks.forEach((button) => {
// 	button.addEventListener(`click`, () => {
// 		deleteBook(/* INDEX TO DELETE? */);
// 	});
// });



function resetLibraryDisplay () {
    for (i = 0; i < myLibrary.length; i++) {
        let libraryCards = container.querySelectorAll(`div`);
    
        libraryCards.forEach(libraryCard => { 
			libraryCard.remove();
    });
    }
}

function deleteBook (indexToDelete) {
    let libraryCards = container.querySelectorAll(`div`);
    libraryCards.forEach(libraryCard => { 
		if (indexToDelete === libraryCard.getAttribute(`data-deleteIndex`)) {
			libraryCard.remove();
		}
    });
	
	resetLibraryDisplay();
	console.log({myLibrary});
	myLibrary.splice(indexToDelete, 1);
	console.log({myLibrary});
	createLibraryDisplay();
}