import React from "react";
import ReactPlayer from "react-player";
import "../../styles/IntroScreen.css"
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
    return(
        <div className="main-container">
            <div className="bg-video-container">
                <ReactPlayer 
                url='//"https://www.youtube.com/watch?v=5wRWniH7rt8?autoplay=1&mute=1&start=20'
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
                    <h2 className="title2">Listen Closely</h2>
                    <Link to='/music'>
                        <motion.button 
                        className="button"
                        whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.2 },
                          }}
                        whileTap={{ scale: 0.97 }}
                        >Enjoy blissful musical sounds</motion.button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero;