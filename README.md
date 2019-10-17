# Employees-Registration Application

## Description

Employees-Registration application with following features:

* Adding a record into database with all fields from manual data entry form
* Listing of all the records (possibly) currently (added ) in the database


## Requirements

Node.js and MySQL installed

## Installation and Usage on Local Machine

1. Clone the repo:

```
$ git clone https://github.com/vijaygehlot/employees-registration.git

```

2. Add parameters in order to connect to MySQL on your machine:



Inside ```/index.js``` paste this block of code, change ```user``` and ```password``` and save the file:

```
// Mysql Configuration---
var connection = mysql.createConnection({
  host: "localhost",
  user: "<USER_NAME>",
  password: "<USER_PASSWORD>",
  database: "<DB_NAME>"
});
```

3. Install server-side dependencies:

```
$ npm install
```

4. Install client-side dependencies:

```
$ cd client
$ npm install
```

5. Build the app:

```
$ npm run build
```

6. Run the app:

```
$ cd ..
$ npm run start
```

7. Run both client and server:

```
$ cd ..
$ npm run dev
```

The application should now run on <code>localhost:5000</code>

## Tech Stack

* React
* Sass
* Node/Express
* MySQL
