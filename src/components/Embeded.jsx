import React from "react";

function VideoEmbed() {
  return (
    <div style={{ width: "100%", maxWidth: "800px", margin: "0 auto" }}>
      <iframe
        width="100%"
        height="450"
        src="https://www.youtube.com/embed/84f2qEY_EcU"
        title="Embedded Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <iframe
        width="100%"
        height="450"
        src="https://www.youtube.com/embed/jVf08N1HwSE"
        title="Encouragement Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoEmbed;
