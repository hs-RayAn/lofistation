import '../../styles/AudioControl.css'
import ReactPlayer from 'react-player'

const AudioPlayer = ({
    play,
    sound,
}) => {
    return(
        <div className="hidden-player">
            <ReactPlayer
                url={sound}
                playing={play}
            />
        </div>
    )
}

export default AudioPlayer;