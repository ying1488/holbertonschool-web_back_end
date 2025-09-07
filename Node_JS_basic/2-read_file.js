const fs = require('fs');

// Create a function named countStudents. It should accept a path in argument
// The script should attempt to read the database file synchronously

// If the database is available, it should log the following message to the console Number of students: NUMBER_OF_STUDENTS
// It should log the number of students in each field, and the list with the following format: Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES
// CSV file can contain empty lines (at the end) - and they are not a valid student!

function countStudents(filePath){
  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    const lines = data.trim().split('\n');
    const studentCS = [];
    const studentSWE = [];

    // iterate each line to look for the field
    lines.forEach((line) => {
        const [firstname, lastname, age, field] = line.split(',');
        if (field === 'CS') {
            studentCS.push(firstname);
        } else if (field === 'SWE') {
            studentSWE.push(firstname);
        }
    });
    // It should log the number of students in each field, and the list with the following format: Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES
    console.log(`Number of students: ${studentCS.length + studentSWE.length}`);
    console.log(`Number of students in CS: ${studentCS.length}. List: ${studentCS.join(', ')}`);
    console.log(`Number of students in SWE: ${studentSWE.length}. List: ${studentSWE.join(', ')}`);
  } catch (error) {
    throw new Error('Cannot load the database:')
  }
};

module.exports = countStudents;