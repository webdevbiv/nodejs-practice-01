const fs = require("node:fs/promises");

fs.appendFile("./append.txt", "Appending some text.\n", { encoding: "utf-8" })
  .then(() => {
    console.log("File appended successfully.");
  })
  .catch((error) => {
    console.error("Error appending file:", error);
  });
