import { routeStructure } from "../types/route-structure";
import { Router } from "express";

export default function initializeRoutes(
  routesHandle: Array<routeStructure>
): Router {
  try {
    const routes = Router();

    routesHandle.forEach((element: routeStructure) => {
      element.middleware
        ? routes[element.method](
            element.route,
            ...element.middleware,
            element.controller
          )
        : routes[element.method](element.route, element.controller);
    });

    return routes;
  } catch (e) {
    throw new Error("Invalid request method");
  }
}
