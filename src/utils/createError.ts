export const createError = (message: string, statusCode: number = 500) => ({
  message,
  statusCode,
});