import { Insert, Select, Delete, Update } from "../model/usermodel.js";
import UserSchema from "../Schema/Userschema.js";
import ValidateSchema from "../checkSchema.js"

const TableName = "user";

export const fetchUserDetail = async (req, res, next) => {

    try {
        const user_id = req.params.user_id;
        const { DB } = req.body;
        const rows = await Select(DB, TableName, user_id);
        res.json({ "DB_DATA": rows })

    } catch (error) {
        return next(new Error(error))
    }
}



export const addUserDetails = async (req, res, next) => {

    const { DB, user_name, Phone_number, Location } = req.body;
    const data = {
        user_name,
        Phone_number,
        Location
    }

    const IsValidData = ValidateSchema(UserSchema, data)

    if (!IsValidData) return next(new Error("Invalid Schema", 403))

    try {
        const result = await Insert(DB, TableName, data)
        res.json({ id: result.insertId, user_name, Phone_number, Location });

    } catch (error) {

        return next(new Error(error))
        // res.status(500).json({ error: 'Internal Server Error' });
    }
}


export const updateUserDetail = async (req, res, next) => {

    const user_id = req.params.user_id;
    const { DB, user_name, Phone_number, Location } = req.body

    const data = {
        user_name,
        Phone_number,
        Location
    }

    const IsValidData = ValidateSchema(UserSchema, data)
    if (!IsValidData) {

        return next(new Error('Invalid data'));

    }


    try {

        const result = await Update(DB, TableName, data, user_id)
        res.json({ id: user_id, user_name, Phone_number, Location, success: true, message: 'Update operation successful', result: result });


    } catch (error) {

        return next(new Error(error, 500))

    }
}


export const deleteUser = async (req, res) => {

    try {

        const DB = req.body.DB;
        const user_id = req.params.user_id;

        await Delete(DB, TableName, user_id)
        res.json({ message: 'user details deleted successfully' });

    } catch (error) {

        return next(new Error(error))
        // res.status(500).json({ error: 'Internal Server Error' });

    }
} 