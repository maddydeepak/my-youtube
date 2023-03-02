import React from "react";
import user from "../assets/img/user.png";
import verified from "../assets/img/verified.png";
import { calculateDate } from "../utils/calculateDate";

const VideoCard = ({ videoData }) => {
  const { snippet, statistics } = videoData;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="w-64 h-64 hover:shadow-lg m-2 p-2 rounded-lg hover:animate-pulse">
      <img className="rounded-lg" src={thumbnails.medium.url} alt="thumbnail" />
      <div className="flex my-2">
        <img className="w-8 h-8" src={user} alt="user" />
        <div className="mx-2">
          <div className="font-bold text-sm h-10">
            {title.length > 40 ? title.substr(0, 40) + "..." : title}
          </div>
          <div className="flex mt-2">
            <span className="text-xs">{channelTitle}</span>
            <img className="w-3 h-3 mx-1" alt="verified" src={verified} />
          </div>
          <h2 className="text-xs mt-1">
            {Intl.NumberFormat("en-US", { notation: "compact" }).format(
              statistics.viewCount
            )}
            {" Views • " + calculateDate(snippet.publishedAt)}
          </h2>
        </div>
      </div>
    </div>
  );
};

export const AdVideoCard = ({ videoData }) => {
  return (
    <div>
      <div
        id="tooltip-default"
        role="tooltip"
        className="z-10 absolute mt-52 mx-56 text-xl text-white"
      >
        AD
      </div>
      <div
        className="hover:bg-gray-400 rounded-lg"
        data-tooltip-target="tooltip-default"
      >
        <VideoCard videoData={videoData} />
      </div>
    </div>
  );
};

export default VideoCard;
