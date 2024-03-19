const student = require('../views/student.js');
const home = require('../views/home.js');

const handleHome = res => {
    home.renderPage(res);
    }
const handleStudent = res => {
    student.renderPage(res);
    }

module.exports = {
    handleHome,
    handleStudent    
    };