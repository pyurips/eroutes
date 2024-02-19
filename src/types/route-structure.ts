import { controllerStructure } from "./controller-structure";
import { middlewareStructure } from "./middleware-structure";

export type routeStructure = {
  route: string;
  method: "get" | "post" | "patch" | "put" | "delete" | "options" | "head" | "trace" | "connect";
  middleware: middlewareStructure | null;
  controller: controllerStructure;
};
