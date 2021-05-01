const mysql = require('mysql');
const express = require('express');

const app = express();
const port = 3000;
const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
};

const getModules = () =>
  new Promise((resolve, reject) => {
    const getQuery = `SELECT name FROM modules`;

    const connection = mysql.createConnection(config);

    connection.query(getQuery, (err, results) => {
      const modulesList = [];

      if (err) {
        return reject(err);
      }

      results.forEach(rowData => modulesList.push(rowData.name));

      resolve(modulesList);
    });

    connection.end();
  });

app.get('/', async (req, res) => {
  const modulesList = await getModules();

  let newHTML = '<h1>Full Cycle!</h1><br /><ul>';

  modulesList.forEach(name => (newHTML += `<li>${name}</li>`));
  newHTML += '</ul>';

  res.send(newHTML);
});

app.listen(port, () => {
  console.log(`rodando na porta ${port}`);
});
