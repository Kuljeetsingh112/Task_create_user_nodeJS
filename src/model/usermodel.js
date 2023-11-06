import { selectUser, createUser, deleteUser, updateUser } from "../DB/crud.js"


export const Insert = async (DB_name, TableName, data) => {

    try {
        const query = `INSERT INTO ${TableName} SET ?`
        return await createUser(query, data, DB_name)

    } catch (error) {
        throw new Error(error);
    }
}


export const Select = async (DB_name, TableName, user_id = "") => {

    try {

        let query = `SELECT * FROM ${TableName}`
        if (user_id) {
            query += ` WHERE user_id = ${user_id}`;
        }
        const [rows] = await selectUser(query, DB_name);
        return rows;

    } catch (error) {

        throw new Error(error);

    }
}

export const Delete = async (DB_name, TableName, user_id) => {

    try {

        const query = `DELETE FROM ${TableName} WHERE user_id = ${user_id}`
        return await deleteUser(query, DB_name);
    } catch (error) {
        throw new Error(error);
    }
}

export const Update = async (DB_name, TableName, data, user_id) => {


    try {
        const query = `UPDATE ${TableName} SET ? WHERE user_id = ${user_id}`
        return await updateUser(query, DB_name, data)
        

    } catch (error) {
        throw new Error(error);
    }
}
