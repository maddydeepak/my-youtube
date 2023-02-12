import React from "react";

const VideoCard = ({ videoData }) => {
  const { snippet, statistics } = videoData;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="w-72 h-72 hover:shadow-lg m-2 p-2 rounded-lg">
      <img className="rounded-lg" src={thumbnails.medium.url} alt="thumbnail" />
      <h1 className="font-bold">{title}</h1>
      <h2 className="">{channelTitle}</h2>
      <h2 className="text-sm">{statistics.viewCount} Views</h2>
    </div>
  );
};

export default VideoCard;
