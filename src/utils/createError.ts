export const createError = (message: string, statusCode: number) => {
  return {
    message,
    statusCode,
  };
};
