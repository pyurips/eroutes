import { routeStructure } from '../types/route-structure.js';
import { Router } from 'express';
import '../types/controller-structure.js';
import '../types/middleware-structure.js';

declare function initializeRoutes(routesHandle: Array<routeStructure>): Router;

export { initializeRoutes as default };
