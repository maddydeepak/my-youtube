import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import CommentsContainer from "./CommentsContainer";
import WatchListCard from "./WatchListCard";
import { Link } from "react-router-dom";
import LiveChat from "./LiveChat";

const WatchVideo = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const videoList = useSelector((store) => store.video.videoList);
  console.log(videoList);
  useEffect(() => {
    dispatch(closeMenu(false));
  });
  return (
    <div className="flex">
      <div className="flex flex-col">
        <div className="mt-4 mx-16">
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
        <CommentsContainer />
      </div>
      <div>
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
