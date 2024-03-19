const text = 
    `
    <html lang=”pl”>
        <head>
            <metacharset="UTF-8">
            <metaname="viewport"content="width=device-width, initial-scale=1.0">
            <title>student.js</title>
        </head>
        <body>
            <div>student.js</div>
        </body>
    </html>
    `
    .trim();

const renderPage = response => {
    response.write(text);
    }

module.exports = {
    renderPage    
    };