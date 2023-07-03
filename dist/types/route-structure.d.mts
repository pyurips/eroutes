import { controllerStructure } from './controller-structure.mjs';
import { middlewareStructure } from './middleware-structure.mjs';
import 'express';

type routeStructure = {
    route: string;
    method: "get" | "post" | "patch" | "put" | "delete";
    middleware: middlewareStructure | null;
    controller: controllerStructure;
};

export { routeStructure };
