const fs = require("node:fs/promises");

fs.readFile("./mix.txt", "utf-8")
  .then((data) => data.split("\n"))
  .then((lines) => lines.map((line) => line.trim()))
  .then((lines) => lines.join(" ")) // or join with " " to reconstruct text
  .then((text) => text.replace(/\.\s*/g, ".\n"))
  .then((formatted) =>
    fs.writeFile("./output.txt", formatted, { encoding: "utf-8" })
  )
  .then(() => {
    console.log("File written to output.txt");
  })
  .catch((error) => {
    console.error("Error reading file:", error);
  });
