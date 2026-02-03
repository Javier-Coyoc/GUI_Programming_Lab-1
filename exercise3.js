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

