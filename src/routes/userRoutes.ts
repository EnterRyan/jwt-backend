import { Router } from 'express';
import { getUsers } from '../controllers/userController';

const router = Router();

// 유저 리스트 조회
router.get('/', getUsers);

export default router;
