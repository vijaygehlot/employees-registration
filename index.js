const express = require("express");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");
const mysql = require("mysql");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Mysql Configuration---
var connection = mysql.createConnection({
  host: "localhost",
  user: "<USER_NAME>",
  password: "<USER_PASSWORD>",
  database: "<DB_NAME>"
});
connection.connect(function(err) {
  if (!err) {
    console.log("Database is connected");
  } else {
    console.log("Error while connecting with database");
  }
});
module.exports = connection;

/* Employee Register!*/

app.post("/employee", (req, res) => {
  let sql = `insert into employees(name, email, number, location, company, about) values ?`;
  let values = [
    [
      req.body.name,
      req.body.email,
      req.body.number,
      req.body.location,
      req.body.company,
      req.body.about
    ]
  ];

  connection.query(sql, [values], function(err, result) {
    if (err) {
      console.log(err);
      res.json({ error: true, message: "Query Failed!" });
    } else {
      let sql2 = `select *from employees where empID = ${result.insertId}`;
      console.log("Number of records inserted: " + result.affectedRows);
      // res.status(201).send({ success: true, results: result });

      connection.query(sql2, function(err, data) {
        if (err) throw err;
        console.log(err);
        res.send(
          JSON.stringify({ status: 200, error: null, response: result, data })
        );
      });
    }
  });
});

/* Get Employee List */

app.get("/employeeslist", (req, res) => {
  connection.query("SELECT * FROM employees", function(err, result) {
    if (err) throw err;
    res.status(200).send({ success: true, results: result });
  });
});

app.listen(port, () => console.log(`Server started on port ${port}`));
