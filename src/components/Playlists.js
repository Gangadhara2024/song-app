import React from "react";
import { useSelector } from "react-redux";
import "../playlist.scss";
import { useNavigate } from "react-router-dom";

export const Playlists = () => {
  const SongData = useSelector((state) => state.SongData);
  const navigate = useNavigate();

  const onclickcard = (playListId) => {
    navigate(`/playlist/${playListId}`);
  };
  return (
    <div className="playlist-container">
      {SongData.map((playlist) => {
        return (
          <div
            key={playlist.id}
            className="card"
            onClick={() => onclickcard(playlist.id)}
          >
            <img src={playlist.displayPicture} alt={playlist.name} />
            <p>{playlist.name} </p>
            <p>{playlist.releaseDate} </p>
            <div className="bottom-box">
              <span className="material-icons">queue_music</span>
              <span>{playlist.songs.length} </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
