import { Request, Response } from "express";
import { loginService } from "../services/auth/loginService";
import { InstanceError, LoginRequestBody } from "./types";
import logger from "../utils/logger";
import { generateAccessToken } from "../services/auth/getAccessToken";


export const postLogin = async (req: Request<{}, {}, LoginRequestBody>, res: Response) => {
  const { userId, userPw } = req.body;
  try {
    const result = await loginService(userId, userPw);
    //엑세스&리프레시 토큰 생성 함수추가
    const accessToyken = generateAccessToken(userId);
    res.status(200).json({ message: result });
  } catch (error:unknown) {
    const err = error as InstanceError;
    logger.error("Error caught in postLogin: " + JSON.stringify(error))
    res.status(err.statusCode || 500).json({ message: err.message || "Internal Server Error" });
  }
};
