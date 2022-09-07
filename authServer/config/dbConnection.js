const mysql = require("mysql2");

const db = mysql.createConnection({
    user:"root",
    // host:process.env.DB_HOST,
    socketPath:process.env.DB__SOCKPATH,
    password:process.env.DB_PASSWORD,
    database:"sundayschool_db1"
});
    


module.exports = db