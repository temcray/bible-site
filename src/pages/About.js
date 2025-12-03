import React from "react";

function About() {
  return (
    <section className="card about">
      <h1>About Peaceful Streams</h1>

      <p>
        Welcome to <strong>Peaceful Streams</strong>, a Bible-centered website
        designed to bring peace, inspiration, and encouragement to believers.
      </p>

      <p>
        Our mission is to help you grow spiritually through daily devotions,
        guided prayers, and Bible study content for all ages.
      </p>

      <p>
        We offer <strong>Devotion of the Day</strong>, <strong>Daily Prayers</strong>,
        and <strong>Children Bible Study</strong> resources to nurture your faith.
      </p>

      <blockquote>
        “He leads me beside the still waters; he restores my soul.” — Psalm 23:2-3
      </blockquote>

      <p>
        Our vision is to create a calm, peaceful space online—a spiritual stream
        for your soul where you can meditate on God's Word every day.
      </p>

      {/* Optional Image */}
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
        alt="Peaceful Stream"
        style={{ width: "80%", maxWidth: "600px", borderRadius: "12px", marginTop: "20px" }}
      />
    </section>
  );
}

export default About;