import fs from 'fs';
import { config } from "../config";

const STORE_PATH = config.jtiStorePath;

export function setTokenJti(jti:string){
  fs.writeFileSync(STORE_PATH,JSON.stringify([...jti]),'utf8')
}

export function deleteTokenJti(jti:string){

}