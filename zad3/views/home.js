const text = 
    `
    <html lang=”pl”>
        <head>
            <metacharset="UTF-8">
            <metaname="viewport"content="width=device-width, initial-scale=1.0">
            <title>home.js</title>
        </head>
        <body>
            <form action="/student" method="post">
                <input type="text" name="name">
                <input type="text" name="lastname">
                <input type="number" name="age">
                <input type="number" name="code">
                <input name="gender" list="browsers">
                <datalist id="browsers">
                <option value="male">
                <option value="female">
                <option value="other">
                </datalist> 
                <input type="text" name="studyField">
                <button type="submit"></button>
            </form>
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