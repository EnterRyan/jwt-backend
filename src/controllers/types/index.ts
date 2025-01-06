export interface LoginRequestBody {
  userId: string;
  userPw: string;
}

export interface InstanceError {
	message: string;
	statusCode:number;
}