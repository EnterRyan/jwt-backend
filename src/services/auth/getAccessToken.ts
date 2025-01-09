import jwt from 'jsonwebtoken';
import logger from '../../utils/logger';

export const generateAccessToken = (userId: string)=>{
  const SALT_VALUE = "test_access_key";
  const payload = {userId};
  const accessToken = jwt.sign(payload, SALT_VALUE, { expiresIn: '15m' });
  logger.info("AccessToken Generate");
  logger.info(accessToken);
  return accessToken;
}