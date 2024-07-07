// src/components/SongListings.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SongListings = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.get('/api/songs');
        setSongs(response.data);
      } catch (error) {
        console.error('Error fetching songs:', error);
      }
    };

    fetchSongs();
  }, []);

  return (
    <div className="my-4">
      <h2>Song Listings</h2>
      <ul className="list-group">
        {songs.map((song) => (
          <li key={song.id} className="list-group-item">
            {song.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SongListings;
