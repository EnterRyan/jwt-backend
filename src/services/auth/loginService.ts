import bcrypt from "bcrypt";
import { getUserPassword } from "../../models/getUserPassword";
import { createError } from "../../utils/createError";
import logger from "../../utils/logger";

export const loginService = async (userId:string, userPw:string) =>{
  const hashPw = await getUserPassword(userId);
  if (hashPw) {
    const isMatch = await bcrypt.compare(userPw, hashPw);
    if (!isMatch) {
      logger.info("Not Match Password");
      throw createError("Not Match Password", 401);
    }
    logger.info("All Match success");
    return "Login successful";
  } 
  else {
    logger.info("Cannot find User");
    throw createError("Cannot find User", 402);
  }
}