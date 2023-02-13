import React from "react";
import user from "../assets/img/user.png";
import verified from "../assets/img/verified.png";

const VideoCard = ({ videoData }) => {
  const { snippet, statistics } = videoData;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="w-72 h-72 hover:shadow-lg m-2 p-2 rounded-lg">
      <img className="rounded-lg" src={thumbnails.medium.url} alt="thumbnail" />
      <div className="flex my-2">
        <img className="w-8 h-8" src={user} alt="user" />
        <h1 className="font-bold mx-2 text-md">
          {title.length > 45 ? title.substr(0, 45) + "..." : title}
        </h1>
      </div>
      <div className="flex">
        <span className="">{channelTitle}</span>
        <img className="w-3 h-3 my-2 mx-1" alt="verified" src={verified} />
      </div>
      <h2 className="text-sm">
        {Number(statistics.viewCount).toLocaleString("en-US")} Views •
      </h2>
    </div>
  );
};

export default VideoCard;
