import mysql from "mysql2/promise"

const getConnection = (DB_name)=>{
return mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: DB_name,
    connectionLimit:100
});
}
export default  {getConnection} ;