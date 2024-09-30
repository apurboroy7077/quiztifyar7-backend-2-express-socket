import mysql from "mysql2";
// const mySqlConnection = mysql.createConnection({
//   host: "localhost", // Replace with your MySQL host
//   user: "apurbo", // Replace with your MySQL username
//   password: "12345", // Replace with your MySQL password
//   database: "expense_tracker", // Replace with your database name
// });
const mySqlConnection = () => {
    try {
        const connenction = mysql.createConnection({
            host: "localhost", // Replace with your MySQL host
            user: "apurbo", // Replace with your MySQL username
            password: "12345", // Replace with your MySQL password
            database: "expense_tracker", // Replace with your database name
        });
        return connenction;
    }
    catch (error) {
        console.log(error);
    }
};
const connectToMySqlDatabase = () => {
    try {
        mySqlConnection.connect((error) => {
            if (error) {
                console.log(error);
            }
            else {
                console.log("Connected to mySQL Database");
            }
        });
    }
    catch (error) {
        console.log(error);
    }
};
export { connectToMySqlDatabase, mySqlConnection };
//# sourceMappingURL=connectMySql.js.map