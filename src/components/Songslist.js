import React from "react";
import "../songslist.scss";
import { useDispatch, useSelector } from "react-redux";

export const Songslist = ({ songs, imageUrl }) => {
  const { song: playerSong, isPlaying } = useSelector(
    (state) => state.playerInfo
  );
  const dispatch = useDispatch();

  const playPauseSong = (song) => {
    dispatch({ type: "update_player", payload: { song, imageUrl } });
  };
  return (
    <div className="songs-list">
      {songs.map((item, index) => {
        const currentSongPlaying = playerSong?.id === item?.id && isPlaying;

        return (
          <div key={item.id} className="song-card">
            <div>
              {currentSongPlaying ? (
                <button className="material-icons icon">pause</button>
              ) : (
                <>
                  <span className="count">{index + 1}</span>
                  <button
                    className="material-icons play-btn icon"
                    onClick={() => playPauseSong(item)}
                  >
                    play_arrow
                  </button>
                </>
              )}
            </div>
            <img src={imageUrl} alt={item.title} />
            <p>{item.title} </p>
            <button
              style={{ cursor: "pointer" }}
              className="material-icons icon"
            >
              favorite
            </button>
          </div>
        );
      })}
    </div>
  );
};
