import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import CommentsContainer from "./CommentsContainer";
import WatchListCard from "./WatchListCard";
import { Link } from "react-router-dom";
import LiveChat from "./LiveChat";
import { YOUTUBE_COMMENT_API } from "../constants";

const WatchVideo = () => {
  const [searchParams] = useSearchParams();
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
      <div className="flex flex-col">
        <div className="mt-4 ml-16">
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
