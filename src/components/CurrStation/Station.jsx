import React from "react";
import '../../styles/Station.css'

const Station = ({
  Nothing,
  LofiGirl,
  MellowBeat,
  Chillhop
}) => {
  return (
    <div className="list-station">
      <div
        onClick={Nothing}
      >Nothing</div>
      <div
        onClick={LofiGirl}
      >Lofi girl</div>
      <div
        onClick={MellowBeat}
      >MellowBeat</div>
      <div
        onClick={Chillhop}
      >Chillhop Music</div>
    </div>
  )
}

export default Station;