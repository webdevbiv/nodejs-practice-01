// const fs = require("node:fs/promises");
// module.exports = {
//   readMovies,
// };

import { log } from "node:console";
import * as fs from "node:fs/promises";
import path from "node:path";

export function readMovies() {
  console.log(path.resolve());
  const filePath = path.join(path.resolve(), "movies.txt");
  return fs.readFile(filePath, { encoding: "utf-8" });
}
