// src/components/MusicPlayer.js
import React, { useState, useRef } from 'react';
import { Button } from 'react-bootstrap';
import './MusicPlayer.css'; // Custom CSS for additional styling

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="music-player-container">
      <audio ref={audioRef} src="path/to/your/song.mp3"></audio>
      <Button variant="outline-light" className="play-pause-button" onClick={handlePlayPause}>
        {isPlaying ? 'Pause' : 'Play'}
      </Button>
    </div>
  );
};

export default MusicPlayer;

