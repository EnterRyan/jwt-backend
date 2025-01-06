import { Router } from 'express';
import userRoutes from './userRoutes';
import authRouter from './authRouter';
import logger from '../utils/logger';

const router = Router();
logger.info("Router in")
// 유저 관련 라우터 연결
router.use('/users', userRoutes);

//인증 인가에 대한 요청
router.use('/auth',authRouter);

export default router;
