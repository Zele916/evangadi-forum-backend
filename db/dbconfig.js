
const mysql = require("mysql2");



const dbconnection = mysql.createPool({
  host:process.env.HOST,
  user:process.env.USERDB,
  database:process.env.USERDB,
  password:process.env.PASSWORD,
  connectionLimit:10,
});

// dbconnection.execute("SELECT 'test' ", (err, result) => {
//   if (err) {
//     console.log(err.message);
//   } else {
//     console.log(result);
//   }
// });
module.exports=dbconnection.promise()
