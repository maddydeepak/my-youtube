import React, { useEffect } from "react";
import { YOUTUBE_API_URL } from "../constants";

const VideoContainer = () => {
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API_URL);
    const json = await data.json();
    console.log(json);
  };

  return <div>VideoContainer</div>;
};

export default VideoContainer;
