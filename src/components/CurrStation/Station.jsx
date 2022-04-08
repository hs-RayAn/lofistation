import React from "react";
import '../../styles/Station.css'
import { motion } from 'framer-motion'

const Station = ({
  Nothing,
  LofiGirl,
  MellowBeat,
  Chillhop,
  Spinnin
}) => {
  return (
    <div className="list-station">
      <div className="list">
        <motion.div 
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.1 },
          }}
          whileTap={{ scale: 0.97 }}
          onClick={Nothing}
        ><p>Ambient</p></motion.div>
        <motion.div
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.1 },
          }}
          whileTap={{ scale: 0.97 }}
          onClick={LofiGirl}
        ><p>Lofi girl</p></motion.div>
        <motion.div
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.1 },
          }}
          whileTap={{ scale: 0.97 }}
          onClick={MellowBeat}
        ><p>MellowBeat</p></motion.div>
        <motion.div
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.1 },
          }}
          whileTap={{ scale: 0.97 }}
          onClick={Chillhop}
        ><p>Chillhop Music</p></motion.div>
        <motion.div
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.1 },
          }}
          whileTap={{ scale: 0.97 }}
          onClick={Spinnin}
        ><p>Spinnin' Records</p></motion.div>
      </div>
    </div>
  )
}

export default Station;