import { Request, Response } from 'express';

type controllerStructure = (req: Request, res: Response) => void;

export { controllerStructure };
