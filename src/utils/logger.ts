import { createLogger, format, transports } from 'winston';
// 로그 포맷 정의
const { combine, timestamp, printf, colorize } = format;

// 로그 출력 포맷
const logFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level}]: ${message}`;
});

// Winston 로거 생성
const logger = createLogger({
  level: 'info', // 기본 로그 레벨
  format: combine(
      timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), // 타임스탬프 추가
      logFormat // 로그 포맷 적용
  ),
  transports: [
      // 콘솔에 로그 출력
      new transports.Console({
          format: combine(colorize(), logFormat),
      }),
      // 파일에 로그 저장
      new transports.File({ filename: 'logs/app.log' }),
  ],
});

export default logger;