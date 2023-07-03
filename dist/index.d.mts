import { routeStructure } from './types/route-structure.mjs';
import { Router } from 'express';
import './types/controller-structure.mjs';
import './types/middleware-structure.mjs';

declare class Eroutes {
    private routes;
    add(route: routeStructure): void;
    getAll(): Array<routeStructure>;
    get(routeName: string): routeStructure | undefined;
    initializeRoutes(): Router;
}

export { Eroutes };
