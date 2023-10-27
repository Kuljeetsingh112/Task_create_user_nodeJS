import { AddAndUpdateQueryInDB, GetAndDeleteQueryInDB } from "../Operations/index.js";

export const fetchUserDetail = async (req, res) => {

    try {

        const { DB, user_id } = req.body;

        let query = 'SELECT * FROM user';
        if (user_id) {
            query += `WHERE user_id = ${user_id}`;
        }

        const rows = await GetAndDeleteQueryInDB(DB, query);
        res.json({ "DB_DATA": rows })

    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' });

    }
}



export const addUserDetails = async (req, res) => {

    try {
        const { DB, user_name, Phone_number, Location } = req.body;
        console.log(DB)
        const query = `INSERT INTO user (user_name, Phone_number, Location) VALUES (?, ?, ?)`;
        const values = [user_name, Phone_number, Location];
        const result = await AddAndUpdateQueryInDB(DB, {
            sql: query
        }, values)
        res.json({ id: result.insertId, user_name, Phone_number, Location });

    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });

    }
}


export const updateUserDetail = async (req, res) => {

    try {

        const user_id = req.params.user_id;
        const { DB, user_name, Phone_number, Location } = req.body;

        const query = `UPDATE user SET user_name = ?, Phone_number = ?, Location = ? WHERE user_id = ?`;
        const values = [user_name, Phone_number, Location, user_id];

        const result = await AddAndUpdateQueryInDB(DB, {
            sql: query,
        }, values)

        res.json({ id: user_id, user_name, Phone_number, Location });
        res.json({ success: true, message: 'Update operation successful' }, result);

    } catch (error) {

        res.status(500).json({ error: 'Internal Server Error' });

    }
}


export const deleteUser = async (req, res) => {

    try {

        const DB = req.body.DB;
        const user_id = req.params.user_id;
        const query = `DELETE FROM user WHERE user_id = ${user_id}`

        await GetAndDeleteQueryInDB(DB, query)
        res.json({ message: 'user details deleted successfully' });

    } catch (error) {

        res.status(500).json({ error: 'Internal Server Error' });

    }
} 