import { Request, Response } from "express";
import { loginService } from "../services/loginService";
import { InstanceError, LoginRequestBody } from "./types";
import logger from "../utils/logger";


export const postLogin = async (req: Request<{}, {}, LoginRequestBody>, res: Response) => {
  const { userId, userPw } = req.body;
  try {
    const result = await loginService(userId, userPw);
    res.status(200).json({ message: result });
  } catch (error:unknown) {
    logger.info("Error caught in postLogin: " + JSON.stringify(error)); // 명시적 변환
    const err = error as InstanceError;
    logger.info(err.message);
    logger.info(err.statusCode);
    res.status(err.statusCode || 500).json({ message: err.message || "Internal Server Error" });
  }
};
