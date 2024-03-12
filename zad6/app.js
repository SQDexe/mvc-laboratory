const http = require('http');
const student = require("./student.js");

const PORT = 3000;

const requestListener = (req, res) => {
    res.setHeader("Content-Type", "text/html");
    
    let id = 0;
    let [fullname, studentID] = [student.getStudentFullName(id), student.getStudentId(id)];

    res.write(`<html><head><title>About student</title></head><body><p>My name id ${fullname}. My student ID is ${studentID}</p></body></html>`);
    res.end();

    process.exit();
    }

http.createServer(requestListener).listen(PORT);