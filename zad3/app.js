const http = require('http');
const routes = require('./routes/index.js')

const PORT = 3000;

const requestListener = (req, res) => {

    const { url } = req;

    res.setHeader('Content-Type', 'text/html');

    if (url === '/')
        routes.handleHome(res);

    else if (url === '/student')
        routes.handleStudent(res);

    else {
        res.statusCode = 404;
        res.write(
            `
            <html lang=”pl”>
                <head>
                    <metacharset="UTF-8">
                    <metaname="viewport"content="width=device-width, initial-scale=1.0">
                    <title>home.js</title>
                </head>
                <body>
                    <div>404 Not Found</div>
                </body>
            </html>
            `
            .trim()
            );
        res.end();
        }

    res.end();

    console.log(`Server is running on ${PORT}`);
    }

http.createServer(requestListener).listen(PORT);