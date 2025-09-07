const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.write('This is the list of our students\n');
  try {
    const data = await countStudents(process.argv[2]);
    res.end(`${data.join('\n')}`);
  } catch (err) {
    console.error(err);
    res.end('Cannot load the database');
  }
});

app.listen(1245, () => {
  console.log('Server is running on port 1245');
});

module.exports = app;
