import React from "react";
import user from "../assets/img/user.png";
import verified from "../assets/img/verified.png";

const WatchListCard = ({ videoData }) => {
  const { snippet, statistics } = videoData;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="h-40 hover:shadow-lg p-2 rounded-lg flex">
      <img className="rounded-lg" src={thumbnails.medium.url} alt="thumbnail" />
      <div className="mx-2">
        <h1 className="font-bold  text-md">
          {title.length > 40 ? title.substr(0, 40) + "..." : title}
        </h1>
        <div className="flex">
          <span className="">{channelTitle}</span>
          <img className="w-3 h-3 my-2 mx-1" alt="verified" src={verified} />
        </div>
        <h2 className="text-sm">
          {Number(statistics.viewCount).toLocaleString("en-US")} Views •
        </h2>
      </div>
    </div>
  );
};

export default WatchListCard;
