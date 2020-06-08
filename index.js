// require("dotenv").config();
import "dotenv/config";

/**
 * Gets the base path from the enviroment variable
 */
export const getBasePath = () => {
  if (!process.env.BASE_PATH) {
    return "";
  }

  const basePath = process.env.BASE_PATH;

  const traillingBasePath = basePath.endsWith("/")
    ? basePath.slice(0, -1)
    : basePath;

  return traillingBasePath.startsWith("/")
    ? traillingBasePath
    : `/${traillingBasePath}`;
};
