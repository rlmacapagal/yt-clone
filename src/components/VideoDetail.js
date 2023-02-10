import React from "react";
import { useState } from "react";

const VideoDetail = ( props ) =>
 {
  if (!props.video) {
    return <h1></h1>
   
  }
 
  
  
  
  console.log("video detail", props);


  const videoSrc = `https://www.youtube.com/embed/${props.video.selectedVideo.id.videoId}`;


  console.log(typeof props.video);
  return (
    <div >
      <div className="ui embed">
        <iframe src={videoSrc} allowFullScreen title="Video player" />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{props.video.selectedVideo.snippet.title}</h4>
        <p>{props.video.selectedVideo.snippet.description}</p>
        

      </div>
    </div>
  );
};

export default VideoDetail;
