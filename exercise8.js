//Create a library object with properties: name and books (empty array)
const library = {
    name: 'City Library',
    books: [],
    //Add a method addBook(title, author, isbn) that creates a book object and adds it to books
    addBook(title, author, isbn) {
    // Create book object and push to books array
    const book = { title, author, isbn}
    this.books.push(book);
 },

//Add a method findBookByTitle(title) that returns the book object or null
 findBookByTitle(title) {
    for (const book of this.books) {
        if (book.title === title) {
            return book;
        }
    }
    return null; 
},

//Add a method listAllBooks() that prints all book titles
    listAllBooks() {
        this.books.forEach(book => {
            console.log(book.title);
        });
    }
};

// Create a universityLibrary object using Object.create(library)
const universityLibrary = Object.create(library);

//Add a courses property (array) to universityLibrary
universityLibrary.books = [];
universityLibrary.courses = [];


//Add a method addCourseBook(courseName, title, author, isbn) that adds both the course and book
universityLibrary.addCourseBook = function(courseName, title, author, isbn) {
    this.courses.push(courseName);
    this.addBook(title, author, isbn);
}

//Test all methods with at least 3 books

universityLibrary.addBook("Clean Code", "Robert Martin", "111");
universityLibrary.addCourseBook("CS101", "Algorithms", "CLRS", "222");
universityLibrary.addCourseBook("JS201", "JavaScript Guide", "MDN", "333");

console.log("All books:");
universityLibrary.listAllBooks();

console.log("\nFind:");
console.log(universityLibrary.findBookByTitle("Algorithms"));