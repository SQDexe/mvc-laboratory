const student = require("./student.js");

let [fullname, studentID] = [student.getStudentFullName(), student.getStudentId()];

console.log(`My name id ${fullname}. My student ID is ${studentID}`);