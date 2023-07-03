import initializeRoutes from "./utils/initializeRoutes";
import { routeStructure } from "./types/route-structure";
import { Router } from "express";

export default class Eroutes {
  private routes: Array<routeStructure> = [];

  add(route: routeStructure): void {
    this.routes.push(route);
  }

  getAll(): Array<routeStructure> {
    return this.routes;
  }

  get(routeName: string): routeStructure | undefined {
    return this.routes.find(element => element.route === routeName);
  }

  initializeRoutes(): Router {
    return initializeRoutes(this.routes);
  }
}
