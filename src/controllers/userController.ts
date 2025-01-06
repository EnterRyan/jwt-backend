import { Request, Response } from 'express';

// 유저 리스트 반환 (예제 데이터)
export const getUsers = (req: Request, res: Response) => {
    res.json([
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Doe' },
    ]);
    
};
