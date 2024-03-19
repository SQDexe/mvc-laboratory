const text = 
    `
    <html lang=”pl”>
        <head>
            <metacharset="UTF-8">
            <metaname="viewport"content="width=device-width, initial-scale=1.0">
            <title>home.js</title>
        </head>
        <body>
            <div>home.js</div>
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