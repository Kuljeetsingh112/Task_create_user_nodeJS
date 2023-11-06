import pool from "./connection.js";


export const selectUser = async (query, DB_name) => {
    let connection = null;
    try {

        connection = await pool.getConnection();
        const DBConnection = `USE ${DB_name}`
        await connection.query(DBConnection)
        const [rows] = await connection.query(query);
        return [rows]

    } catch (error) {
        throw new Error(error);

    } finally {

        if (connection) {
            connection.release()
        }
    }
}


export const createUser = async (query, data, DB_name) => {

    let connection = null;
    try {
        connection = await pool.getConnection();
        const DBConnection = `USE ${DB_name}`
        await connection.query(DBConnection)
        const [rows] = await connection.query(query, data);
        return rows


    } catch (error) {
        throw new Error(error);

    } finally {

        if (connection) {
            connection.release()
        }
    }
}


export const deleteUser = async (query, DB_name) => {
    let connection = ""
    try {
        connection = await pool.getConnection();
        const DBConnection = `USE ${DB_name}`
        await connection.query(DBConnection)
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


export const updateUser = async (query, DB_name, data) => {
    let connection = ""
    try {
        connection = await pool.getConnection();
        const DBConnection = `USE ${DB_name}`
        await connection.query(DBConnection)
        const [rows] = await connection.query(query, data);
        return rows;
    } catch (error) {
        throw new Error(error);

    } finally {

        if (connection) {
            connection.release();
        }

    }
}