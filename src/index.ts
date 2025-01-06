import express from 'express';
import cors from "cors";

import routes from './routes/';
import logger from './utils/logger';
import { config } from './config';


const app = express();
const PORT = config.port;

// JSON 요청 처리 미들웨어
app.use(express.json());

app.use(
    cors({
      origin: "http://localhost:5173", // React 앱의 주소
    })
  );

// 라우터 연결
app.use('/api', routes);

// 서버 실행
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    logger.info("Server Start Success!")
});
