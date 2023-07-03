import { Request, Response } from "express";

export type controllerStructure = (req: Request, res: Response) => void;
