import './App.css';
import Station from './components/CurrStation/Station'
import { useState } from 'react';
import ReactPlayer from 'react-player';
import AudioPlayer from './components/CurrStation/AudioPlayer';
import Channel from './components/CurrStation/Channel';

function App() {
//imagine documenting your code lmao
  const [video, setVideo] = useState(`//https://www.youtube.com/watch?v=CiGHT4eS-oU?autoplay=1&mute=1&start=20`); //bg video link
  const [playing, setPlaying] = useState(false); //initial state
  const [muted, setMuted] = useState(true);
  const [audio, setAudio] = useState("") //livestream link
  const [title, setTitle] = useState(""); //channel name
  const [ytLink, setYtLink] = useState(""); //channel link

  const Nothing = () => {
    setTitle("Nothing");
    setVideo('//https://www.youtube.com/watch?v=CiGHT4eS-oU?autoplay=1&mute=1&start=20');
    setAudio('')
    setPlaying(true)
    setMuted(true)
    setTitle()
  };

  const LofiGirl = () => {
    setTitle("Lofi Girl")
    setVideo('//https://www.youtube.com/watch?v=T0LBTvde71w?autoplay=1&mute=1&start=0');
    setAudio(`https://www.youtube.com/watch?v=5qap5aO4i9A&ab_channel=LofiGirl`);
    setYtLink("https://www.youtube.com/c/LofiGirl");
    setPlaying(true)
    setMuted(false)
  };

  const MellowBeat = () => {
    setTitle("Mellow Beat");
    setVideo('//https://www.youtube.com/watch?v=WLXo_x3VzUU?autoplay=1&mute=1&start=0');
    setAudio(`https://www.youtube.com/watch?v=IUT1qAhMY4w`);
    setYtLink('https://www.youtube.com/c/MellowbeatSeekers');
    setPlaying(true);
    setMuted(false);
  };

  const Chillhop = () => {
    setTitle("Chillhop Music");
    setVideo('//https://www.youtube.com/watch?v=ybsOHVrptBM?autoplay=1&mute=1&start=50&end=100');
    setAudio(`https://www.youtube.com/watch?v=7NOSDKb0HlU`);
    setYtLink('https://www.youtube.com/c/Chillhopdotcom');
    setPlaying(true);
    setMuted(false);
  };

  const Comrade = () => {
    setTitle("Comrade!");
    setVideo('//https://www.youtube.com/watch?v=y5zQTmkY7GI?autoplay=1&mute=1');
    setAudio('https://www.youtube.com/watch?v=y5zQTmkY7GI');
    setYtLink
  };

  return (
    <div className="App">
      <Station className="stations"
        Nothing={Nothing}
        LofiGirl={LofiGirl}
        MellowBeat={MellowBeat}
        Chillhop={Chillhop}
      />
      
      <div class="div">
        <div className="bg-video">
          <ReactPlayer
            width="100%"
            height="100%"
            loop={true}
            url={video}
            volume='mute'
            playing={playing}
            muted={muted}
          />
        </div>
        <AudioPlayer
          className="hidden-player"
          sound={audio}
          play={playing}
          
        />
      </div>
      <Channel />
    </div>
  );
}

export default App;
