"use client"
import ReactPlayer from "react-player";

export default function YouTubeVideo({ linkId }) {


  const videoUrl = `https://www.youtube.com/embed/${ linkId }`;

  return (
    <div>
      <ReactPlayer
        url={ videoUrl }
        width='100%'
        />
    </div>
  );
};
