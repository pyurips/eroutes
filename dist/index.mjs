import {
  initializeRoutes
} from "./chunk-NAIMLM3V.mjs";

// src/index.ts
var Eroutes = class {
  constructor() {
    this.routes = [];
  }
  add(route) {
    this.routes.push(route);
  }
  getAll() {
    return this.routes;
  }
  get(routeName) {
    return this.routes.find((element) => element.route === routeName);
  }
  initializeRoutes() {
    return initializeRoutes(this.routes);
  }
};
export {
  Eroutes
};
