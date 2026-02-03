const student = {
 firstName: 'John',
 lastName: 'Doe',
 studentId: '12345',
 courses: [],

 getFullName() {
    return this.firstName + " " + this.lastName;
 },

 enrollCourse(courseName) {
    this.courses.push(courseName);
 },

 getCourseCount() {
    return this.courses.length;
 }
};

const book = {
 title: 'JavaScript: The Good Parts',
 author: 'Douglas Crockford',
 year: 2008,
 isbn: '978-0596517748'
};

function displayProperty(obj, propertyName) {
 // Use bracket notation: obj[propertyName]
    console.log(obj[propertyName])
}

function updateProperty(obj, propertyName, newValue) {
 // Your code here
    obj[propertyName] = newValue
}

displayProperty(book, 'title');
updateProperty(book, 'year', 2024);
displayProperty(book, 'year');