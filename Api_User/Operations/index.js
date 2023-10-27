import pool from "../DB/connection.js"

export async function AddAndUpdateQueryInDB(DB_name, query, values) {
    let connection = null;
    try {

        connection = await pool.getConnection(DB_name);
        const [rows] = await connection.query(query.sql, values);
        return rows;
        
    } catch (error) {

        res.status(500).json({ error: 'Internal Server Error' });


    } finally {

        if (connection) {
            connection.releaseConnection();
        }
    }
}
export async function GetAndDeleteQueryInDB(DB_name, query) {
    let connection = null;
    try {

        connection = await pool.getConnection(DB_name);
        console.log("connected")
        const [rows] = await connection.query(query);
        return rows;
    } catch (error) {

        res.status(500).json({ error: 'Internal Server Error' });

    } finally {

        if (connection) {
            connection.releaseConnection();
        }

    }
}
