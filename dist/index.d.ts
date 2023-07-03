import { routeStructure } from './types/route-structure.js';
import { Router } from 'express';
import './types/controller-structure.js';
import './types/middleware-structure.js';

declare class Eroutes {
    private routes;
    add(route: routeStructure): void;
    getAll(): Array<routeStructure>;
    get(routeName: string): routeStructure | undefined;
    initializeRoutes(): Router;
}

export { Eroutes };
