import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import CommentsContainer from "./CommentsContainer";
import WatchListCard from "./WatchListCard";
import { Link } from "react-router-dom";
import LiveChat from "./LiveChat";
import { YOUTUBE_COMMENT_API } from "../constants";
import verified from "../assets/img/verified.png";
import { useLocation } from "react-router-dom";
import user from "../assets/img/user.png";
import like from "../assets/img/like.png";
import dislike from "../assets/img/dislike.png";
import { calculateDate } from "../utils/calculateDate";

const WatchVideo = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const { video } = location.state;
  console.log(video);
  const dispatch = useDispatch();
  const videoList = useSelector((store) => store.video.videoList);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    dispatch(closeMenu(false));
    fetchCommentsData();
  }, []);

  const fetchCommentsData = async () => {
    const data = await fetch(YOUTUBE_COMMENT_API + searchParams.get("v"));
    const json = await data.json();
    setComments(json.items);
  };

  return (
    <div className="flex">
      <div className="flex flex-col mt-4 ml-16 text-sm">
        <div className="">
          <iframe
            width="680"
            height="380"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="text-xl font-bold mt-2">{video.snippet.title}</div>
        <div className="flex">
          <img src={user} className="w-8 m-2" />
          <div>
            <div className="flex">
              <span>{video.snippet.channelTitle}</span>
              <img
                className="w-3 h-3 mx-1 mt-1"
                alt="verified"
                src={verified}
              />
            </div>
            <div>{video.snippet.channelTitle}</div>
          </div>
          <button>Subscribe</button>
          <button className="bg-gray-200 hover:bg-gray-300 h-8 ml-16 flex  rounded-l-full p-2 justify-center">
            <img className="w-4 mx-2 hover:shadow-2xl" src={like} />
            5.3K
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 h-8 flex rounded-r-full border border-l-gray-400 p-2 justify-center">
            <img className="w-4 mt-1 mx-2 hover:shadow-2xl" src={dislike} />
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 h-8 ml-1 flex rounded-full p-2 justify-center">
            Share
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 h-8 ml-1 flex rounded-full p-2 justify-center">
            Thanks
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 h-8 ml-1 flex rounded-full p-2 justify-center">
            ...
          </button>
        </div>
        <div className="bg-gray-200 rounded-lg p-2">
          <div className="font-bold">
            {Intl.NumberFormat("en-US", { notation: "compact" }).format(
              video.statistics.viewCount
            )}
            {" views "}
            {calculateDate(video.snippet.publishedAt)}
          </div>
          {video.snippet.description}
        </div>
        <CommentsContainer comments={comments} />
      </div>
      <div className="mx-0">
        <LiveChat />
        {videoList.map((video) => (
          <Link to={"/watch?v=" + video.id}>
            <WatchListCard videoData={video} key={video.id} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WatchVideo;
