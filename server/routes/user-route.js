import express from 'express';
import { loginAccount, registerAccount, getUserInfo } from '../controllers/account-controller.js';
import ensureAccess from '../middleware/account-auth-middleware.js';

const router = express.Router();

router.post("/register", registerAccount);
router.post("/login", loginAccount);
router.get("/info", ensureAccess, getUserInfo);

export default router;
