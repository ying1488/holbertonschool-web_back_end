const readDatabase = require("../utils");
const path = require('path');
const databaseFilePath = path.join(__dirname, '..', '..', 'database.csv');

class StudentController {
    static async getAllStudents(req, res){
        try{
            const data = await readDatabase(databaseFilePath);
            let text = 'This is the list of out students\n';

            const fields = Object.keys(data).sort((a, b)=>a.toLowerCase().localeCompare(b.toLowerCase()));

            fields.forEach((field)=>{
                const students = data[field];
                text += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
            });

            return res.status(200).send(text);
        } catch (error) {
            return res.status(500).send('Cannot load the database');
        }
    }
}

static async getAllStudentsByMajor(request, response) {
    const major = request.params.major;

    if (major !== 'CS' && major !== 'SWE') {
      return response.status(400).send('Major parameter must be CS or SWE'); // 400 for bad request
    }

    try {
      const data = await readDatabase(databaseFilePath);
      const students = data[major];

      if (!students || students.length === 0) {
        return response.status(404).send(`No students found for major ${major}`); // Handle empty list or missing data
      }

      return response.status(200).send(`List: ${students.join(', ')}`);
    } catch (error) {
      return response.status(500).send('Cannot load the database');
    }
  }

module.exports = StudentsController;