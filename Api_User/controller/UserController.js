import axios from "axios";
import pool from "../DB/connection.js"

export const fetchUserDetail = async (req, res) => {

    let connection = ""
    try {

        const { DB, user_id } = req.body;
        connection = pool.getConnection(DB);

        let query = 'SELECT * FROM user';

        if (user_id) {
            query += ` WHERE user_id = ${user_id}`;
        }

        const [rows] = await connection.query(query);
        res.json({ "DB_DATA": rows })

    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' });

    } finally {
        connection.releaseConnection()
    }
}


export const addUserDetails = async (req, res) => {

    let connection = ""
    try {

        const { DB, user_name, Phone_number, Location } = req.body;
        connection = pool.getConnection(DB);

        const [result] = await connection.query('INSERT INTO user SET ?', { user_name, Phone_number, Location });
        res.json({ id: result.insertId, user_name, Phone_number, Location });

    } catch (error) {

        res.status(500).json({ error: 'Internal Server Error' });

    } finally {
        connection.releaseConnection()
    }
}


export const updateUserDetail = async (req, res) => {

    let connection = ""
    try {

        const user_id = req.params.user_id;
        const { DB, user_name, Phone_number, Location } = req.body;
        connection = pool.getConnection(DB);

        await connection.query('UPDATE user SET ?', { user_name, Phone_number, Location, user_id });
        res.json({ id: user_id, user_name, Phone_number, Location });
        res.json({ success: true, message: 'Update operation successful' });

    } catch (error) {

        res.status(500).json({ error: 'Internal Server Error' });

    } finally {
        connection.releaseConnection()
    }
}


export const deleteUser = async (req, res) => {

    let connection = ""
    try {

        const DB = req.body.DB;
        connection = pool.getConnection(DB);
        const user_id = req.params.user_id;

        await connection.query('DELETE FROM user WHERE user_id = ?', [user_id]);
        res.json({ message: 'user details deleted successfully' });

    } catch (error) {

        res.status(500).json({ error: 'Internal Server Error' });

    } finally {

        connection.releaseConnection()

    }
} 