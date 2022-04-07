import React from "react";
import ReactPlayer from "react-player";
import '../../styles/Station.css'

const Station = (props) => {
  return (
    <div className="div">
      <button>asdfasdf</button>
      <div className="bg-video">
          <ReactPlayer //CiGHT4eS-oU
            url={props.link}
            playing={true}
            position='relative'
            overflow='hidden'
            muted={true}
            loop={true}
            width='100%'
            height='100%'
          />
      </div>
    </div>
  )
    //test link: //https://www.youtube.com/watch?v=CiGHT4eS-oU?autoplay=1&mute=1&start=20
}

export default Station;