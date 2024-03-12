const students = id => {
    switch (id) {
        case 0 : return {id: 12345, fullname: "Jakub Szuchniewicz"};
        case 1 : return {id: 111222, fullname: "Kacper Nowak"};
        case 2 : return {id: 222333, fullname: "Maja Kowalska"};
        default : return {id: 333444, fullname: "Michal Wisniewski"};
        }
    }

const getStudentId = id => students(id).id;
const getStudentFullName = id => students(id).fullname;

module.exports = {
    getStudentFullName,
    getStudentId,
    };