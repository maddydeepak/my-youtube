import React, { useState, useEffect } from "react";
import { YOUTUBE_API_URL } from "../constants";
import VideoCard, { AdVideoCard } from "./VideoCard";
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
    <Shimmer key="ShimmerComponent" />
  ) : (
    <div className="flex flex-wrap ml-36">
      {videoData[0] && (
        <Link to={"/watch?v=" + videoData[0].id}>
          <AdVideoCard videoData={videoData[0]} key={videoData[0].id} />
        </Link>
      )}
      {videoData.slice(1).map((video) => (
        <Link to={"/watch?v=" + video.id} state={{ video: video }}>
          <VideoCard videoData={video} key={video.id} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
