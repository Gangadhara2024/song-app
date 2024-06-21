import "./App.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { Playlists } from "./components/Playlists";
import { Songslist } from "./components/Songslist";
import { Likedsongs } from "./components/Likedsongs";
import { Sidebar } from "./components/Sidebar";
import { Playlist } from "./components/Playlist";
import { Musicplayer } from "./components/Musicplayer";

function App() {
  const PlayerLayout = () => {
    return (
      <div className="app">
        <Sidebar />
        <Outlet />
        <Musicplayer />
      </div>
    );
  };
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<PlayerLayout />}>
            <Route path="/playlists" element={<Playlists />} />
            <Route path="/playlist/:playListId" element={<Playlist />} />
            <Route path="/liked-songs" element={<Likedsongs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
