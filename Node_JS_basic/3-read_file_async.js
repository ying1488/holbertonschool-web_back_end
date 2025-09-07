const fs = require('fs').promises;

function countStudents(path) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const rows = lines.slice(1);

    const totalStudents = rows.length;
    const studentsCS = [];
    const studentsSWE = [];

    for (const row of rows) {
        const columns = row.split(',');
        const studentName = columns[0];
        const field = columns[3];
        if (field === 'CS') studentsCS.push(studentName);
        if (field === 'SWE') studentsSWE.push(studentName);
    }
    const output = [
        `Number of students: ${totalStudents}`,
        `Number of students in CS: ${studentsCS.length}. List: ${studentsCS.join(', ')}`,
        `Number of students in SWE: ${studentsSWE.length}. List: ${studentsSWE.join(', ')}`
    ];
    return output;
    } catch (error){
    throw new Error('Cannot load the database:');
  }
}

module.exports = countStudents;
