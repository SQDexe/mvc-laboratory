const http = require('http');
const student = require('./views/student.js');
const home = require('./views/home.js');

const PORT = 3000;

const requestListener = (req, res) => {

    const { url } = req;

    res.setHeader('Content-Type', 'text/html');

    if (url === '/')
        home.renderPage(res);

    else if (url === '/student')
        student.renderPage(res);

    res.end();

    console.log(`Server is running on ${PORT}`);
    }

http.createServer(requestListener).listen(PORT);