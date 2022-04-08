import '../../styles/AudioControl.css'
import ReactPlayer from 'react-player'

const AudioPlayer = ({
    play,
    sound,
    loop
}) => {
    return(
        <div className="hidden-player">
            <ReactPlayer
                url={sound}
                playing={play}
                loop={loop}
            />
        </div>
    )
}

export default AudioPlayer;