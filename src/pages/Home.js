import React from "react";
import DevotionCard from "../components/DevotionCard";


function Home() {
  return (
    <div>
      <h1>Welcome to Peaceful Streams</h1>

      <section className="card">
        <h2>Devotion of the Day</h2>
        <DevotionCard title="Trust in God" content="Trust in the Lord with all your heart..." />
      </section>

      <section className="card">
        <h2>Daily Prayers</h2>
        <p>Lord, guide me through this day with peace and wisdom...</p>
      </section>

      <section className="card">
        <h2>Children Bible Study</h2>
        <p>Stories and lessons from the Bible for kids.</p>
      </section>
    </div>
  );
}

export default Home;
