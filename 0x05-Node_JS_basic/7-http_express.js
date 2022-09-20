const express = require('express'); // Import express module
const fs = require('fs'); // Import fs module

/**
 * Counts the students in a CSV data file.
 * @param {String} Path The path to the CSV database file.
 * @author Alex Arévalo <https://github.com/Alexoat76>
 */
function countStudents(path) { // Function to count students in a CSV file
  return new Promise((resolve, reject) => { // Return a promise to handle the async function
    fs.readFile(path, 'utf-8', (err, res) => { // Read the file and handle the error
      if (err) return reject(new Error('Cannot load the database'));

      const headerArray = res.split(/\r?\n|\n/); // Split the file by line breaks
      const headers = headerArray[0].split(','); // Split the first line by commas

      // Strip headers and convert to list of dicts
      const dictList = []; // Create an empty list to store the dicts
      const noHeaderArray = headerArray.slice(1); // Remove the first line from the array
      for (let i = 0; i < noHeaderArray.length; i += 1) { // Iterate over the array
        const data = noHeaderArray[i].split(','); // Split the line by commas
        if (data.length === headers.length) {
          const row = {}; // Create an empty dict to store the data
          for (let j = 0; j < headers.length; j += 1) { // Iterate over the headers
            row[headers[j].trim()] = data[j].trim(); // Add the data to the dict
          }
          dictList.push(row); // Add the dict to the list
        }
      }

      // Count and collect first names of students per field
      let countCS = 0;
      let countSWE = 0;
      const studentsCS = [];
      const studentsSWE = [];

      dictList.forEach((element) => { // Iterate over the list of dicts
        if (element.field === 'CS') { // Check if the field is CS
          countCS += 1;
          studentsCS.push(element.firstname);
        } else if (element.field === 'SWE') {
          countSWE += 1;
          studentsSWE.push(element.firstname);
        }
      });

      const countStudents = countCS + countSWE; // Count the total number of students

      return resolve({
        countStudents,
        countCS,
        countSWE,
        studentsCS,
        studentsSWE,
      });
    });
  });
}
// Get the path to the CSV file from the command line
const pathToDB = process.argv[2];
const app = express();
const PORT = 1245;
const HOST = 'localhost';

app.get('/', (_, res) => { // Handle the root route with a GET request
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  // Call async function and collect needed variables
  await countStudents(pathToDB)
    .then(({
      countStudents,
      countCS,
      countSWE,
      studentsCS,
      studentsSWE,
    }) => {
      const text = 'This is the list of our students\n';
      const total = `Number of students: ${countStudents}\n`;
      const CS = `Number of students in CS: ${countCS}. List: ${studentsCS.toString().split(',').join(', ')}\n`;
      const SWE = `Number of students in SWE: ${countSWE}. List: ${studentsSWE.toString().split(',').join(', ')}`;
      res.status(200).send(text + total + CS + SWE); // Send the response to the client
    })
    .catch(() => { // Handle the error if the file cannot be read
      res.status(404).send('Cannot load the database');
    });
});

app.listen(PORT, () => { // listen on port and print message to console
  console.log(`Server listening at http://${HOST}:${PORT}`);
});

module.exports = app;
