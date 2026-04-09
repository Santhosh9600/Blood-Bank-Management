const express = require("express")
const mysql = require("mysql")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()
const PORT = 3001

// Middleware
app.use(cors())
app.use(bodyParser.json())

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: "santhoshdb"
})

db.connect((err) => {
    if (!err) {
        console.log("DB Connected...")
    } else {
        console.log("DB Connection Failed", err)
    }
})

// Create Table Route
app.get("/createtable", (req, res) => {

    let sql = `CREATE TABLE client(Id INT AUTO_INCREMENT,Username VARCHAR(100),Email VARCHAR(100),Password VARCHAR(100),Phone_number VARCHAR(15),PRIMARY KEY(id))`;

    db.query(sql, (err, result) => {
        if (err) {
            res.send("Table creation failed")
        } else {
            res.send("Table Created Successfully")
        }
    })
})

//Insert Post

app.post("/register", (req, res) => {

    const { username, email, password, phone_number } = req.body;

    let sql = "INSERT INTO client (username,email,password,phone_number) VALUES (?,?,?,?)";

    db.query(sql, [username, email, password, phone_number], (err, result) => {

        if (err) {
            console.log(err);
            res.send("Registration Failed");
        } else {
            res.send("User Registered Successfully");
        }

    });

});

app.get("/users", (req, res) => {
    const sql = "SELECT * FROM client";
    db.query(sql, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.json(result); 
        }
    });
});

// Update user
app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const { username, email, password, phone_number } = req.body;

  const sql = `UPDATE client SET username=?, email=?, password=?, phone_number=? WHERE id=?`;

  db.query(sql, [username, email, password, phone_number, id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error updating user");
    } else {
      res.send("User updated successfully");
    }
  });
});

// Delete user
app.delete('/users/:id', (req, res) => {
  const { id } = req.params;

  const sql = `DELETE FROM client WHERE id=?`;

  db.query(sql, [id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error deleting user");
    } else {
      res.send("User deleted successfully");
    }
  });
});

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT)
})