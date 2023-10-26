import express from "express";
import { updateUserDetail, deleteUser, addUserDetails, fetchUserDetail } from "../controller/UserController.js";

const router = express.Router();

// Fetch user details
router.get('/', fetchUserDetail);

// Add user details
router.post('/', addUserDetails);

// Update user detail
router.put('/:user_id', updateUserDetail);

// Delete user
router.delete('/:user_id', deleteUser);

export default router;