import { Router } from 'express';
import { postLogin } from '../controllers/loginController';
import logger from '../utils/logger';

const router = Router();

// 로그인
router.post('/login', postLogin);

export default router;
