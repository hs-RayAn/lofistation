import './App.css';
import Station from './components/CurrStation/Station'
import { useState } from 'react';

function App() {

  const [video, setVideo] = useState(`//https://www.youtube.com/watch?v=CiGHT4eS-oU?autoplay=1&mute=1&start=20`);
  const [title, setTitle] = useState("");
  const [ytLink, setYtLink] = useState("");
  const [paused, setPaused] = useState(true);
  const [audio, setAudio] = useState("")

  const LofiGirl = () => {
    setVideo('//https://www.youtube.com/watch?v=T0LBTvde71w?autoplay=1&mute=1&start=0');
    setTitle("Lofi Girl")
    setYtLink("https://www.youtube.com/c/LofiGirl")
  }

  return (
    <div className="App">
      <Station 
        onClick={LofiGirl}
        link={video}
        title={title}
        ytLink={ytLink}
      />
    </div>
  );
}

export default App;
