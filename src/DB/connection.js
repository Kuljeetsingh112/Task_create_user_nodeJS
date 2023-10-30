import mysql from "mysql2/promise"

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    connectionLimit: 100
});

export default pool;