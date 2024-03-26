const express = require('express');
const bp = require("body-parser");

const PORT = 3000;
const students = [];

const app = express();

app.get('/', (req, res) => {
    res.send('<html><head><title>HOME</title></head><body><p>HOME</p></body></html>');
    });

app.get('/student-add', (req, res) => {
    res.send('<html><head><title>STUDENT-ADD</title></head><body><form action="./student" method="post"><label for="name">Imię: <input type="text" name="name" id="name"></label><label for="surname">Nazwisko: <input type="text" name="surname" id="surname"></label><label for="studyField">Kierunek: <input type="text" name="studyField" id="studyField"></label><input type="submit" value="Send"></form></body></html>');
    });

app.use(bp.urlencoded({
    extended: true
    }));
app.use(bp.json());

app.get('/student', (req, res) => {
    let [name, surname, studyField] = [req.body.name, req.body.surname, req.body.studyField];
    students.push({name, surname, studyField});
    res.send(`<html><head><title>STUDENT</title></head><body><p>Hello, ${name} ${surname} on ${studyField} studies!</p></body></html>`);
    });

app.get('/users', (req, res) => {
    res.send('<html><head><title>STUDENT</title></head><body>');
    for (let {name, surname, studyField} of students)
        res.send(`<p>${name} ${surname} - ${studyField}</p>`);
    res.send('</body></html>');
    });

app.listen(PORT);