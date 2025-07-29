const fs = require("node:fs/promises");

fs.writeFile("./write.txt", "Hello, World!", { encoding: "utf-8" })
  .then(() => {
    console.log("File written successfully.");
  })
  .catch((error) => {
    console.error("Error writing file:", error);
  });
