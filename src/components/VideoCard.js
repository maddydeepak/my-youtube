import React from "react";
import user from "../assets/img/user.png";
import verified from "../assets/img/verified.png";

const VideoCard = ({ videoData }) => {
  const { snippet, statistics } = videoData;
  const { channelTitle, title, thumbnails } = snippet;

  const calculatePublishedDate = (publishedAt) => {
    let dt1 = new Date(publishedAt);
    let dt2 = new Date();
    var time = (dt2.getTime() - dt1.getTime()) / 1000;
    var value = Math.abs(Math.round(time / (3600 * 24)));
    const defaultYear = 365,
      defaultMonth = 30;
    let year, months, days;
    year = value >= defaultYear ? Math.floor(value / defaultYear) : 0;
    value = year ? value - year * defaultYear : value;
    months =
      value >= defaultMonth
        ? Math.floor((value % defaultYear) / defaultMonth)
        : 0;
    value = months ? value - months * defaultMonth : value;
    days = Math.floor(value % defaultYear);
    return (
      (year > 0 ? year + (year > 1 ? " years " : " year ") : "") +
      (months > 0 ? months + (months > 1 ? " months " : " month ") : "") +
      days +
      (days > 1 ? " days Ago" : " day Ago")
    );
  };

  return (
    <div className="w-64 h-64 hover:shadow-lg m-2 p-2 rounded-lg">
      <img className="rounded-lg" src={thumbnails.medium.url} alt="thumbnail" />
      <div className="flex my-2">
        <img className="w-8 h-8" src={user} alt="user" />
        <div className="mx-2">
          <div className="font-bold text-sm">
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
            {" Views • " + calculatePublishedDate(snippet.publishedAt)}
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
        className="hover:bg-gray-500 rounded-lg"
        data-tooltip-target="tooltip-default"
      >
        <VideoCard videoData={videoData} />
      </div>
    </div>
  );
};

export default VideoCard;
