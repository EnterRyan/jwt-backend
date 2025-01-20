import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';

import logger from '../../utils/logger';
import { createError } from '../../utils/createError';
import { setTokenJti } from '../../models/handleTokenJti';

export const generateRefreshToken = async(userId:string):Promise<string>=>{
  const SALT_VALUE = "refresh_key";
  const jti = uuidv4();
  try{
    const payload = {
      sub: userId,
      jti:jti,
    }
    const refreshToken = await jwt.sign(payload,SALT_VALUE,{ expiresIn: '1d' });
    //여기에 store에 jti 저장.
    setTokenJti(jti)
    logger.info("refresh Generate");
    logger.info(refreshToken);
    return refreshToken;
  }
  catch(error){
    logger.info("Refresh Generate fail");
    if (error instanceof jwt.JsonWebTokenError) {
      throw createError("Token generation failed due to server error", 500);
    }
    else{
      throw createError("Internal Server Error", 500);
    }
  }
}
  