import initializeRoutes from "./utils/initializeRoutes";
import { routeStructure } from "./types/route-structure";
import { Router } from "express";

export default class Eroutes {
  private routes: Array<routeStructure> = [];

  add(route: routeStructure): void {
    this.routes.push(route);
  }

  getAll(): void {}

  get(): void {}

  initializeRoutes(): Router {
    return initializeRoutes(this.routes);
  }
}
