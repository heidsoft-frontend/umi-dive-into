import { Request, Response } from 'express';
export default {
  // 支持值为 Object 和 Array
  'GET /api/users': { users: [1, 2] },

  // GET 可忽略
  '/api/users/1': { id: 1 },

  // 支持自定义函数，API 参考 express@4
  'POST /api/users/create': (req: Request, res: Response) => {
    // 添加跨域请求头
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json([1, 2, 3, 4]);
  },
  'delete /api/user/:id': (req: Request, res: Response) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json({ code: 0 });
  },
  'put /api/user/:id': (req: Request, res: Response) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json({ code: 1 });
  },
  'POST /api/user/login': (req: Request, res: Response) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (Math.random() > 0.5) {
      res.json({ code: 0 });
    } else {
      res.json({ code: 1 });
    }
  },
};
