import { Button, Result } from "antd";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import SongData from "../SongData";
import "../App.css";
import { Songslist } from "./Songslist";

export const Playlist = () => {
  const playListId = Number(useParams().playListId);

  const playlistss = useSelector((state) => {
    const selectedSongs = state.SongData.filter(
      (song) => song.id === playListId
    );
    return selectedSongs.length ? selectedSongs[0] : null;
  });
  if (!playlistss) {
    return (
      <div>
        <Result
          status="404"
          title="404"
          subTitle={<p>Sorry, the page you visited does not exist.</p>}
          extra={<Link to="/playlists">Back To Playlists</Link>}
        />
      </div>
    );
  }
  return (
    <div >
      <Songslist
        imageUrl={playlistss.displayPicture}
        songs={playlistss.songs}
      />
    </div>
  );
};
