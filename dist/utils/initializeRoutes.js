"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/utils/initializeRoutes.ts
var initializeRoutes_exports = {};
__export(initializeRoutes_exports, {
  default: () => initializeRoutes
});
module.exports = __toCommonJS(initializeRoutes_exports);
var import_express = require("express");
function initializeRoutes(routesHandle) {
  try {
    const routes = (0, import_express.Router)();
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
