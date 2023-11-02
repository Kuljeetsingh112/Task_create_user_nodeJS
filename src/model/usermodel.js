import pool from "../DB/connection.js"

export async function Insert(DB_name, TableName, data) {
    let connection = null;
    try {

        connection = await pool.getConnection();
        const DBConnection = `USE ${DB_name}`
        await connection.query(DBConnection)
        const [rows] = await connection.query(`INSERT INTO ${TableName} SET ?`, data);
        return rows;

    } catch (error) {
        throw new Error(error);

    } finally {

        if (connection) {
            connection.release()
        }
    }
}


export async function Select(DB_name, TableName, user_id = "") {
    let connection = null;
    try {
        connection = await pool.getConnection();
        const DBConnection = `USE ${DB_name}`
        await connection.query(DBConnection)

        let query = `SELECT * FROM ${TableName}`;
        if (user_id) {
            query += ` WHERE user_id = ${user_id}`;
        }
        const [rows] = await connection.query(query);
        return rows;

    } catch (error) {

        throw new Error(error);

    } finally {

        if (connection) {
            connection.release();
        }

    }
}

export async function Delete(DB_name, TableName, user_id) {
    let connection = ""
    try {
        connection = await pool.getConnection();
        const DBConnection = `USE ${DB_name}`
        await connection.query(DBConnection)
        const [rows] = await connection.query(`DELETE FROM ${TableName} WHERE user_id = ${user_id}`);
        return rows;
    } catch (error) {

        throw new Error(error);

    } finally {

        if (connection) {
            connection.release();
        }

    }
}

export async function Update(DB_name, TableName, data, user_id) {

    let connection = ""
    try {
        connection = await pool.getConnection();
        const DBConnection = `USE ${DB_name}`
        await connection.query(DBConnection)
        const [rows] = await connection.query(`UPDATE ${TableName} SET ? WHERE user_id = ${user_id}`, data);
        return rows;
    } catch (error) {

        throw new Error(error);

    } finally {

        if (connection) {
            connection.release();
        }

    }
}
