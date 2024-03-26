const express = require('express');

const PORT = 3000;

const app = express();

app.get('/', (req, res) => {
    res.send('<html><head><title>HOME</title></head><body><p>HOME</p></body></html>');
    });

app.get('/student', (req, res) => {
    res.send('<html><head><title>STUDENT</title></head><body><p>STUDENT</p></body></html>');
    });

app.get('/student-add', (req, res) => {
    res.send('<html><head><title>STUDENT-ADD</title></head><body><p>STUDENT-ADD</p></body></html>');
    });

app.listen(PORT);