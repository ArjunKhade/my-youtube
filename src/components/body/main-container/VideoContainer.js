import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../../../constant/constant';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

const VideoContainer = () => {

  const [videos, setVideos]= useState([]);

  const suggetion = useSelector((store) => store.suggetion.query)

  useEffect(() =>{
    getVideos();
  },[suggetion])

  const getVideos = async ()=> {
   const data = await fetch(YOUTUBE_API(suggetion));
   const json = await data.json();
  //  console.log(json);
   setVideos(json.items);
  }

  return videos && (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link key={video?.etag} to={"/watch?v=" + video?.id?.videoId}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
}

export default VideoContainer