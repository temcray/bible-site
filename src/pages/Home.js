import React from "react";
import DevotionCard from "../components/DevotionCard";


function Home() {
  return (
    <div>
      <h1>Welcome to Peaceful Streams</h1>

      <section className="card">
        <h2>Devotion of the Day</h2>
        <DevotionCard title="Trust in God" content="Trust in the Lord with all your heart; do not depend on your own understanding." />
      </section>

      <section className="card">
        <h2>Daily Prayers</h2>
        <p>Lord, guide me through this day with peace and wisdom.
          Psalms 32:8 The LORD says, 'I will guide you along the best pathway for your life.'
        </p>
      </section>

      <section className="card">
        <h2>Children Bible Study</h2>
        <p>Stories and lessons from the Bible for kids.
          Deuteronmy 6:5 And you must love the Lord your God with all your heart, all your soul, and all your strength.
        </p>
      </section>
    </div>
  );
}

export default Home;
