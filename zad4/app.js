const http = require('http');
const student = require("./student.js");

const PORT = 3000;

http.createServer((req, res) => {

    res.end();    
    }).listen(PORT);

console.log(`Server is running on ${PORT}`);

let [fullname, studentID] = [student.getStudentFullName(), student.getStudentId()];
console.log(`My name id ${fullname}. My student ID is ${studentID}`);

process.exit();