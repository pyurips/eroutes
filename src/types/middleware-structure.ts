import { Request, Response, NextFunction } from "express";

export type middlewareStructure = Array<
  (req: Request, res: Response, next: NextFunction) => void
>;
