import { routeStructure } from '../types/route-structure.mjs';
import { Router } from 'express';
import '../types/controller-structure.mjs';
import '../types/middleware-structure.mjs';

declare function initializeRoutes(routesHandle: Array<routeStructure>): Router;

export { initializeRoutes as default };
