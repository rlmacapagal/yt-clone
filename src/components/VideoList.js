import React from 'react';
import VideoItem from './VideoItem';

const VideoList = (props) => {
    console.log("eto vids", props.videos);
    
   if(props.videos.videos != undefined)
   {
    const renderedVideos =  props.videos.videos.map((video) =>
    {
        
       return <VideoItem key={video.id.videoId} video={video} handleVideoSelect={props.handleVideoSelect} />
       //console.log(video);

      
       
   });
   return <div>{renderedVideos}</div>;
   }
    
  

      

    
     //return <div>hey</div>;
};
export default VideoList;