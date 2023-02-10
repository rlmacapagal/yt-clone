import React from 'react';
import SearchBar from './Searchbar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import logo from './assets/logo.PNG';
import { useState, useEffect } from "react";

import video from './assets/video.PNG';
import grid from './assets/grid.PNG';
import bell from './assets/bell.PNG';
import home from './assets/home.PNG';
import explore from './assets/explore.PNG';
import subscription from './assets/subscription.PNG';
import library from './assets/library.PNG';
import history from './assets/history.PNG';
import your_video from './assets/your-video.PNG';
import watch_later from './assets/watch-later.PNG';
import liked_video from './assets/liked video.PNG';
import show_more from './assets/show more.PNG';
import like from './assets/like.png';
import dislike from './assets/dislike.png';


function App ()
 {
   
    //commentForm = "hide";
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedvideo] = useState(null);
    const [comment, setComment] = useState("");
    const [commentForm, setCommentform] = useState("hide");
    const [comments, setComments] = useState([]);
    const [stylez, setStylez] = useState("listz");
    const [vidlist, setVidlist] = useState("");
    const [listz, setListz] = useState("listz");
   //const [videodetail, setVideodetail] = useState("listz");
   const [id, setId] = useState(0);
    const [likectr, setLikectr] = useState(0);
    const [dislikectr, setDislikectr] = useState(0);
   console.log(listz);
   console.log(stylez);
   

   let handleSubmit = async (termFromSearchBar) =>
    {
        const response = await youtube.get('/search', {
            params: {
                q: termFromSearchBar
            }
        })

        setVideos({ videos: response.data.items});
        console.log("this is resp",response);
    };
    let handleVideoSelect = (video) => 
    {
        setSelectedvideo({selectedVideo: video});
    }

    let handleComment = (event) =>
    {   
        event.preventDefault();
        setId(id + 1);
        setComments([...comments, { id : id, comment : comment,  likectr: 0, dislikectr : dislikectr }]);
        console.log("eto comments", comments);

        //setLikectr(0);
        //setDislikectr(0);
      
    }

    let handleLike = (event) =>
    {   

        const newComments = comments.map(item =>
        {
            console.log(item);
            console.log(event.target.id);
            if (event.target.id == item.id)
            {
              return { ...item, likectr: (item.likectr + 1)}
            }
            return item;
        });
        console.log("eto comments", newComments);
        setComments(newComments);
        //console.log(comments[0].likectr);
    }

    let handleDislike = (event) =>
    {   

        const newComments = comments.map(item =>
        {
            console.log(item);
            console.log(event.target.id);
            if (event.target.id == item.id)
            {
              return { ...item, dislikectr: (item.dislikectr + 1)}
            }
            return item;
        });
        console.log("eto comments", newComments);
        setComments(newComments);
        //console.log(comments[0].likectr);
    }

    
   
    useEffect(() =>
    {   
        if(selectedVideo)
        {
            setCommentform("display");  
            setStylez("videodetail");  
            setListz("videolist");
            setComment("");
            setComments([]);
        }
      


    }, [selectedVideo]);
    
        return (
        <>
        <nav class="navbar">
            <div class="toggle-btn">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <img src={logo} class="logo" alt=""/>
            <div class="search-box">
            <SearchBar handleFormSubmit={handleSubmit}/>
              
            </div>
            <div class="user-options">
                <img src= {video} class="icon" alt=""/>
                <img src= {grid} class="icon" alt=""/>
                <img src={bell} class="icon" alt=""/>
                
            </div>
        </nav>
        <div class="side-bar">
    <a href="#" class="links active"><img src={home} alt=""/>home</a>
    <a href="#" class="links"><img src={explore} alt=""/>explore</a>
    <a href="#" class="links"><img src={subscription} alt=""/>subscription</a>
    <hr class="seperator"/>
    <a href="#" class="links"><img src={library} alt=""/>library</a>
    <a href="#" class="links"><img src={history} alt=""/>history</a>
    <a href="#" class="links"><img src={your_video} alt=""/>your video</a>
    <a href="#" class="links"><img src={watch_later} alt=""/>watch leater</a>
    <a href="#" class="links"><img src={liked_video} alt=""/>like video</a>
    <a href="#" class="links"><img src={show_more} alt=""/>show more</a>
</div>
<div class="filters">
    <button class="filter-options active">all</button>
    <button class="filter-options">CSS</button>
    <button class="filter-options">web development</button>
    <button class="filter-options">python</button>
    <button class="filter-options">entertainment</button>
    <button class="filter-options">marvel</button>
    <button class="filter-options">javascript</button>
    <button class="filter-options">artificial intelligence</button>
    <button class="filter-options">machine learning</button>
    <button class="filter-options">trending</button>

</div>
                            
<div class="video-container" >
        
          
        <div id = {stylez}>      
        <VideoDetail video={selectedVideo} stylez = {stylez}/>
      
        <form id = {commentForm}>
          <input id = "comment" value = {comment || ""} type="text" placeholder="Add a comment" onChange = {(event) => setComment(event.target.value)}/>
          <hr id="hrcomment"/>
          <button id="komment" onClick={handleComment}>COMMENT</button>
        </form>
       {comments.map((komento) =>

            <li key={komento.id}><p id="user">RM</p><p id="nombre">Richard Macapagal</p><br/>
            <span id="commentz">{komento.comment}</span><br/>
            <button id = {komento.id} className='reaction' ><img id = {komento.id} onClick={handleLike} className = "likers" src = {like} /></button>
            <span id="counter">{komento.likectr}</span>
            <button className='reaction' onClick={()=>setDislikectr(komento.dislikectr + 1)}>
            <img id = {komento.id} onClick={handleDislike} className = "likers" src = {dislike} /></button><span id="counter">{komento.dislikectr}</span>
            </li>
        )} 
        </div>
        <div id = {listz}>
        <VideoList handleVideoSelect={handleVideoSelect} videos={videos}/>
        </div>
     
                  
</div>

      


      
            </>
           
        )
    
}

export default App;