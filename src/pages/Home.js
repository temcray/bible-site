import { useState } from "react";

function Home() {
  const [category, setCategory] = useState("All");

  const devotionOfTheDay = {
    title: "Faith Over Fear",
    verse: "Joshua 1:9 — 'Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.'",
    message: "No matter what challenges come your way, remember that God's presence is constant. Walk in faith, not fear."
  };

  const devotions = [
    {
      id: 1,
      title: "Faith Over Fear",
      verse: "2 Timothy 1:7",
      category: "Faith",
      content:
        "God has not given us a spirit of fear, but of power, love, and self-discipline."
    },
    {
      id: 2,
      title: "Strength in Weakness",
      verse: "Isaiah 40:31",
      category: "Strength",
      content:
        "Those who trust in the Lord will renew their strength. They will soar on wings like eagles."
    },
    {
      id: 3,
      title: "Power of Prayer",
      verse: "1 John 5:14",
      category: "Prayer",
      content:
        "This is the confidence we have in approaching God: that if we ask anything according to His will, He hears us."
    }
  ];

  // FILTER LOGIC
  const filteredDevotions =
    category === "All"
      ? devotions
      : devotions.filter((d) => d.category === category);

  return (
    <div className="home">
      {/* Devo of the Day */}
      <section className="devo-day">
        <h2>{devotionOfTheDay.title}</h2>
        <p><em>{devotionOfTheDay.verse}</em></p>
        <p>{devotionOfTheDay.message}</p>
      </section>

      {/* Category Filter */}
      <div className="filter-box">
        <label>Filter by Category: </label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Faith">Faith</option>
          <option value="Strength">Strength</option>
          <option value="Prayer">Prayer</option>
        </select>
      </div>

      {/* Devotions List */}
      <div className="devotions-list">
        {filteredDevotions.map((item) => (
          <div key={item.id} className="devo-card">
            <h3>{item.title}</h3>
            <p><em>{item.verse}</em></p>
            <p>{item.content}</p>
            <small>Category: {item.category}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
