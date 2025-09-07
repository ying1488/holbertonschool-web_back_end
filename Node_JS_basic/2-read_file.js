const fs = require('fs');

function countStudents(filePath){
  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    const lines = data.trim().split('\n');
    const studentCS = [];
    const studentSWE = [];

    // iterate each line to look for the field
    lines.forEach((line) => {
        const [firstname, age, field] = line.split(',');
        if (field === 'CS') {
            studentCS.push(firstname);
        } else if (field === 'SWE') {
            studentSWE.push(firstname);
        }
    });
    console.log(`Number of students: ${studentCS.length + studentSWE.length}`);
    console.log(`Number of students in CS: ${studentCS.length}. List: ${studentCS.join(', ')}`);
    console.log(`Number of students in SWE: ${studentSWE.length}. List: ${studentSWE.join(', ')}`);
  } catch (error) {
    throw new Error('Cannot load the database:');
  }
}

module.exports = countStudents;
