import React, { useEffect, useState } from "react";
import { getVerse, getChapter } from "../services/bibleApi";
import bibleService from "../services/bibleService";


function Bible() {
  const [book, setBook] = useState("");
  const [chapter, setChapter] = useState("");
  const [verse, setVerse] = useState("");
  const [result, setResult] = useState(null);

  const [bookNames, setBookNames] = useState([]);

  async function handleFetch() {
    if (book && chapter && verse) {
      const data = await getVerse(book, chapter, verse);
      setResult(data);
    } else if (book && chapter) {
      const data = await getChapter(book, chapter);
      setResult(data);
    }
  }

  // when the page loads
  useEffect(() => {
    let bnames = bibleService.getBookNames();
    setBookNames(bnames);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <div className="bible-reader-card">

        <h1>Bible Books</h1>

        {/* Book Dropdown */}
        <form class="bible-form">

          <select value={book} onChange={(e) => setBook(e.target.value)}>
            <option value="">Select Book</option>
            {bookNames.map((b) => (
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

          <button type="button" onClick={handleFetch}>Load Scripture</button>
        </form>
      </div>

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