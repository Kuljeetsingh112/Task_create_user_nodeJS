import express from "express";
import { updateUserDetail, deleteUser, addUserDetails, fetchUserDetail } from "../controller/UserController.js";

const router = express.Router();

// Fetch user details
router.get('/:DB_name', fetchUserDetail);

//Fetct user detials by id
router.get('/DB_name/:user_id', fetchUserDetail);

// Add user details
router.post('/', addUserDetails);

// Update user detail
router.put('/:user_id', updateUserDetail);

// Delete user
router.delete('/:user_id', deleteUser);

export default router;