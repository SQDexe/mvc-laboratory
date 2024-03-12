const getStudentId = () => 12345, getStudentFullName = () => "Jakub Szuchniewicz";

let [fullname, studentID] = [getStudentFullName(), getStudentId()];

console.log(`My name id ${fullname}. My student ID is ${studentID}`);