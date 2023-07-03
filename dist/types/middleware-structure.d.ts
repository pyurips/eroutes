import { Request, Response, NextFunction } from 'express';

type middlewareStructure = Array<(req: Request, res: Response, next: NextFunction) => void>;

export { middlewareStructure };
