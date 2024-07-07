import React, { useState } from 'react';
import MusicPlayer from './MusicPlayer';
import Search from './Search';
import './Home.css'; // Custom CSS for additional styling

const songData = [
  {
    title: 'Song 1',
    description: 'Description of Song 1',
    audioUrl: 'music/song1.mp3', // Replace with actual Google Drive link
    imageUrl: 'https://i.scdn.co/image/ab67616d0000b273d9a129c4a656a55afff2ca02', // Replace with actual image URL
  },
  {
    title: 'Song 2',
    description: 'Description of Song 2',
    audioUrl: 'https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_2', // Replace with actual Google Drive link
    imageUrl: 'https://example.com/song2.jpg', // Replace with actual image URL
  },
  // Add more songs with their respective details
];

const Home = () => {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = (song) => {
    if (currentSong && currentSong.audioUrl === song.audioUrl && isPlaying) {
      setIsPlaying(false);
    } else {
      setCurrentSong(song);
      setIsPlaying(true);
    }
  };

  const stopPlayback = () => {
    setCurrentSong(null);
    setIsPlaying(false);
  };

  return (
    <div className="home-container">
      <div className="search-bar">
        <Search />
      </div>
      <div className="content">
        <section className="featured-playlists">
          <h2>Featured Playlists</h2>
          <div className="row">
            <div className="col-md-3">
              <div className="card">
                <img src="https://i.scdn.co/image/ab67616d0000b273d9a129c4a656a55afff2ca02" className="card-img-top" alt="Playlist" />
                <div className="card-body">
                  <h5 className="card-title">Playlist 1</h5>
                  <p className="card-text">Description of Playlist 1</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img src="https://www.shutterstock.com/editorial/image-editorial/MdT3Me06O1T2Q8w2OTg3Nzk=/sabrina-carpenter-440nw-13378023dn.jpg" className="card-img-top" alt="Playlist" />
                <div className="card-body">
                  <h5 className="card-title">Playlist 2</h5>
                  <p className="card-text">Description of Playlist 2</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img src="https://via.placeholder.com/150" className="card-img-top" alt="Playlist" />
                <div className="card-body">
                  <h5 className="card-title">Playlist 3</h5>
                  <p className="card-text">Description of Playlist 3</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img src="https://via.placeholder.com/150" className="card-img-top" alt="Playlist" />
                <div className="card-body">
                  <h5 className="card-title">Playlist 4</h5>
                  <p className="card-text">Description of Playlist 4</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="new-releases">
          <h2>New Releases</h2>
          <div className="row">
            <div className="col-md-3">
              <div className="card">
                <img src="https://via.placeholder.com/150" className="card-img-top" alt="New Release" />
                <div className="card-body">
                  <h5 className="card-title">Album 1</h5>
                  <p className="card-text">Description of Album 1</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img src="https://via.placeholder.com/150" className="card-img-top" alt="New Release" />
                <div className="card-body">
                  <h5 className="card-title">Album 2</h5>
                  <p className="card-text">Description of Album 2</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img src="https://via.placeholder.com/150" className="card-img-top" alt="New Release" />
                <div className="card-body">
                  <h5 className="card-title">Album 3</h5>
                  <p className="card-text">Description of Album 3</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img src="https://via.placeholder.com/150" className="card-img-top" alt="New Release" />
                <div className="card-body">
                  <h5 className="card-title">Album 4</h5>
                  <p className="card-text">Description of Album 4</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="recommended">
          <h2>Recommended for You</h2>
          <div className="row">
            {songData.map((song, index) => (
              <div className="col-md-3" key={index}>
                <div className="card">
                  <img src={song.imageUrl} className="card-img-top" alt={song.title} />
                  <div className="card-body">
                    <h5 className="card-title">{song.title}</h5>
                    <p className="card-text">{song.description}</p>
                    <button onClick={() => togglePlay(song)}>
                      {currentSong && currentSong.audioUrl === song.audioUrl && isPlaying ? 'Pause' : 'Play'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Audio Player Component */}
        {currentSong && (
          <div className="audio-player">
            <audio controls autoPlay={isPlaying}>
              <source src={currentSong.audioUrl} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
            <button onClick={stopPlayback}>Stop</button>
          </div>
        )}

        <MusicPlayer />
      </div>
    </div>
  );
};

export default Home;
