// src/utils/initializeRoutes.ts
import { Router } from "express";
function initializeRoutes(routesHandle) {
  try {
    const routes = Router();
    routesHandle.forEach((element) => {
      element.middleware ? routes[element.method](
        element.route,
        ...element.middleware,
        element.controller
      ) : routes[element.method](element.route, element.controller);
    });
    return routes;
  } catch (e) {
    throw new Error("Invalid request method");
  }
}

export {
  initializeRoutes
};
