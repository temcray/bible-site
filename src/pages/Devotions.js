import React from "react";
import { useState } from "react";

const books = [
  "Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy",
  "Matthew", "Mark", "Luke", "John", "Acts", "Romans"
  // Add all 66 books
];

function Devotions() {
  const [filter, setFilter] = useState("");

  const filteredBooks = books.filter(b =>
    b.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Devotions by Book</h1>

      <input
        type="text"
        placeholder="Filter by emotions or prayer..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={{ padding: "8px", margin: "10px", width: "80%" }}
      />

      {filteredBooks.map(book => (
        <div key={book} className="card">
          <h3>{book}</h3>
          <p>Sample devotion content for {book}.</p>
        </div>
      ))}
    </div>
  );
}

export default Devotions;