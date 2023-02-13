import React, { useState, useEffect } from "react";
import { YOUTUBE_API_URL } from "../constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import { useDispatch } from "react-redux";
import { videoList } from "../utils/videoSlice";

const VideoContainer = () => {
  const [videoData, setVideoData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API_URL);
    const json = await data.json();
    setVideoData(json.items);
    dispatch(videoList(json.items));
  };

  return videoData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex flex-wrap ml-36">
      {videoData.map((video) => (
        <Link to={"/watch?v=" + video.id}>
          <VideoCard videoData={video} key={video.id} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
