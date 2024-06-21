import { useSelector } from "react-redux";
import "../music-player.scss";
import { useLocation } from "react-router-dom";

export const Musicplayer = () => {
  const location = useLocation();
  console.log(location);

  const { imageUrl, song, isPlaying } = useSelector(
    (state) => state.playerInfo
  );
  if (!song) {
    return null;
  }
  return (
    <div className="music-player">
      <div className="left">
        <img src={imageUrl} alt={song.title} />
        <p>{song.title} </p>
      </div>
      <audio src={`${window.origin}/${song.fileAddress}`} controls></audio>
      <span className="material-icons">favorite</span>
    </div>
  );
};
