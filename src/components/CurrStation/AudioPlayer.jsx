import { useState } from 'react';
import '../../styles/AudioControl.css'
import ReactPlayer from 'react-player'
import { motion } from 'framer-motion'
import peBtn from '../../assets/pause.png'
import pyBtn from '../../assets/play.png'

const AudioPlayer = ({
    play,
    sound,
    loop,
    muted
}) => {
    const [mute,isMuted] = useState(muted);
    const [volume, setVolume] = useState(0.35);

    return(
        <div>
            <div className="pepyBtn">
                <motion.img src={mute ? pyBtn : peBtn} alt=''
                    whileHover={{
                    scale: 1.01,
                    transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => isMuted(!mute)}></motion.img>
            </div>
            <input
                style={{borderRadius: '5px'}}
                className="volumeDial"
                type="range"
                min={0}
                max={1}
                value={volume}
                step={0.01}
                onChange={(event) => {
                    setVolume(event.target.valueAsNumber);
                }}
            />
            <div className="hidden-player">
                <ReactPlayer
                    url={sound}
                    playing={play}
                    loop={loop}
                    muted={mute}
                    volume={volume}
                />
            </div>
            
        </div>
    )
}

export default AudioPlayer;