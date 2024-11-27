import dotenv from 'dotenv';

// .env 파일 로드
dotenv.config();

export const config = {
    port: process.env.PORT || 5000,
    jwtSecret: process.env.JWT_SECRET || 'default_secret',
};
