import { readMovies } from "./movies.js";

async function displayMovies() {
  try {
    const moviesList = await readMovies();
    console.log("Movies List:", moviesList);
  } catch (error) {
    console.error("Error reading movies:", error);
  }
}

displayMovies();
