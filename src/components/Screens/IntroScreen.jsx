import React from "react";
import ReactPlayer from "react-player";
import "../../styles/IntroScreen.css"
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
    return(
        <div className="main-container">
            <div className="links">
                    <a href="https://www.youtube.com/watch?v=5wRWniH7rt8" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faYoutube} size='2x' color='#183b73'/>
                    </a>
            </div>
            <div className="bg-video-container">
                <ReactPlayer 
                url='//https://www.youtube.com/watch?v=5wRWniH7rt8?autoplay=1&mute=1&start=20'
                playing={true}
                position='relative'
                overflow='hidden'
                muted={true}
                loop={true}
                width='100%'
                height='100%'
                />
            </div>
            <div className="link-to-main">
                <div className="title">
                    <h2 className="title2" style={{paddingLeft: '3%'}}>Sirenical</h2>
                    <Link to='/music'>
                        <motion.button 
                        className="button"
                        whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.2 },
                          }}
                        whileTap={{ scale: 0.97 }}
                        >今ツズケル</motion.button>
                    </Link>
                </div>
                
            </div>
            
        </div>
    )
}

export default Hero;