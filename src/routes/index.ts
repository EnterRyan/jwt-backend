import { Router } from 'express';
import userRoutes from './userRoutes';

const router = Router();

// 유저 관련 라우터 연결
router.use('/users', userRoutes);

export default router;
