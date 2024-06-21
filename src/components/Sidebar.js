import { NavLink } from "react-router-dom";
import "../sidebar.scss";

const ActiveClassName = ({ isActive }) =>
  `link ${isActive ? "active-link" : ""} `;

export const Sidebar = () => {
  return (
    <div className="side-bar">
      <NavLink to="/liked-songs" className={ActiveClassName}>
        Liked-songs
      </NavLink>
      <NavLink to="/playlists" className={ActiveClassName}>
        Playlists
      </NavLink>
    </div>
  );
};
