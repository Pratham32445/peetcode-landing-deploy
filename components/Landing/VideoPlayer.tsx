"use client";
import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
  return (
    <div className="max-w-4xl m-auto translate-y-[-40px] rounded overflow-hidden">
      <ReactPlayer
        controls
        onBuffer={() => <h1>Loading...</h1>}
        playing={true}
        url="/peetcode.mp4"
        width={"100%"}
        height={"100%"}
      />
    </div>
  );
};

export default VideoPlayer;
