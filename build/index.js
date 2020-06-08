"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBasePath = undefined;

require("dotenv/config");

/**
 * Gets the base path from the enviroment variable
 */
var getBasePath = exports.getBasePath = function getBasePath() {
  if (!process.env.BASE_PATH) {
    return "";
  }

  var basePath = process.env.BASE_PATH;

  var traillingBasePath = basePath.endsWith("/") ? basePath.slice(0, -1) : basePath;

  return traillingBasePath.startsWith("/") ? traillingBasePath : "/" + traillingBasePath;
}; // require("dotenv").config();