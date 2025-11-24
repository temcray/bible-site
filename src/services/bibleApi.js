// src/services/bibleApi.js

const BASE_URL = "https://bible-api.com";

export async function getVerse(book, chapter, verse) {
  const response = await fetch(`${BASE_URL}/${book}+${chapter}:${verse}`);
  return response.json();
}

export async function getChapter(book, chapter) {
  const response = await fetch(`${BASE_URL}/${book}+${chapter}`);
  return response.json();
}
