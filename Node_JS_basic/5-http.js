const http = require('http');
const countStudents = require('./3-read_file_async');

const host = '127.0.0.1';

const app = http.createServer(async (req, res) => {
  const {url} = req;

  if (url === '/') {
    res.end('Hello Holberton School!');
  }
  if (url === '/students') {
    res.write('This is the list of our students\n');
    try {
      const data = await countStudents(process.argv[2]);
      res.end(`${data.join('\n')}`);
    } catch (err) {
      console.error(err);
      res.end('Cannot load the database');
    }
  }
});
app.listen(1245, host, () => {
  console.log('Server is running on http://127.0.0.1:1245');
});

module.exports = app;
