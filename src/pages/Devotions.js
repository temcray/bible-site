import React from "react";
import { useState } from "react";
import { DEVOTIONS } from "../services/devotionsServices";
import EmotionFilter from "../components/EmotionFilter";



function Devotions() {
  const [emotion, setEmotion] = useState("all");


  const filtered = emotion === "all"
    ? DEVOTIONS
    : DEVOTIONS.filter((d) => d.emotion === emotion);

  return (

    <div className="card">
      <h1 className="text-2xl font-bold mb-4">Daily Devotions</h1>

      <EmotionFilter selectedEmotion={emotion} onChange={setEmotion} />

      <div className="card">
        {filtered.map((d) => (
          <div key={d.id} className="p-4 border rounded shadow">
            <h2 className="font-bold">{d.title}</h2>
            <p className="text-sm text-gray-600">{d.verse}</p>
            <p className="mt-2">{d.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}



export default Devotions;