import express from 'express';
import routes from './routes/';

import { config } from './config';
import logger from './utils/logger';

const app = express();
const PORT = config.port;

// JSON 요청 처리 미들웨어
app.use(express.json());

// 라우터 연결
app.use('/api', routes);

// 서버 실행
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    logger.info("Server Start Success!")
});
