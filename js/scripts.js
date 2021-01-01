let readReport;

function books(title, author, pages, read, info) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	if (read === 1) {
		readReport = `already read`;
	} else {
		readReport = `not read yet`;
	}
	this.info = function (string) {
	return (`` + title + ` by ` + author + `, ` + pages + ` pages, `	+ readReport);
}
}

let hobbit = new books(`The Hobbit`, `J.R.R. Tolkien`, 295, 0)

console.log(hobbit.info());