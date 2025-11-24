import React, { useState } from "react";
import { booksOfBible } from "../services/books";
import { getVerse, getChapter } from "../services/bibleApi";

function Bible() {
  const [book, setBook] = useState("");
  const [chapter, setChapter] = useState("");
  const [verse, setVerse] = useState("");
  const [result, setResult] = useState(null);

  async function handleFetch() {
    if (book && chapter && verse) {
      const data = await getVerse(book, chapter, verse);
      setResult(data);
    } else if (book && chapter) {
      const data = await getChapter(book, chapter);
      setResult(data);
    }
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Bible Reader</h1>

      {/* Book Dropdown */}
      <select value={book} onChange={(e) => setBook(e.target.value)}>
        <option value="">Select Book</option>
        {booksOfBible.map((b) => (
          <option key={b} value={b}>{b}</option>
        ))}
      </select>

      {/* Chapter Input */}
      <input
        type="number"
        placeholder="Chapter"
        value={chapter}
        onChange={(e) => setChapter(e.target.value)}
      />

      {/* Verse Input */}
      <input
        type="number"
        placeholder="Verse (optional)"
        value={verse}
        onChange={(e) => setVerse(e.target.value)}
      />

      <button onClick={handleFetch}>Load Scripture</button>

      {/* Results */}
      {result && (
        <div style={{ marginTop: "20px" }}>
          <h2>{result.reference}</h2>
          <p>{result.text}</p>
        </div>
      )}
    </div>
  );
}

export default Bible;