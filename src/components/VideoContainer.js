import React, { useState, useEffect } from "react";
import { YOUTUBE_API_URL } from "../constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videoData, setVideoData] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API_URL);
    const json = await data.json();

    setVideoData(json.items);
  };

  return (
    <div className="flex flex-wrap">
      {videoData.map((video) => (
        <Link to={"/watch?v=" + video.id}>
          <VideoCard videoData={video} key={video.id} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
