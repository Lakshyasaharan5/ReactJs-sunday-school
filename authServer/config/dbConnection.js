const mysql = require("mysql2");

const db = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"Sam012345",
    database:"users_db"
});
    


module.exports = db