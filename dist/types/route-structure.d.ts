import { controllerStructure } from './controller-structure.js';
import { middlewareStructure } from './middleware-structure.js';
import 'express';

type routeStructure = {
    route: string;
    method: "get" | "post" | "patch" | "put" | "delete";
    middleware: middlewareStructure | null;
    controller: controllerStructure;
};

export { routeStructure };
