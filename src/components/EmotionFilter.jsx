function EmotionFilter({ selectedEmotion, onChange }) {
  const emotions = ["all", "peace", "joy", "anxitety", "sadness", "hope"];

  return (
    <select
      value={selectedEmotion}
      onChange={(e) => onChange(e.target.value)}
      className="p-2 rounded border"
    >
      {emotions.map((emotion) => (
        <option key={emotion} value={emotion}>
          {emotion.toUpperCase()}
        </option>
      ))}
    </select>
  );
}

export default EmotionFilter;
