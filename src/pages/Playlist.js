import SideNavbar from "../component/SideNavbar/SideNavbar";
import { useVideoContext } from "../context/VideoContext";
import "../styles/home.css";

import "../styles/watch-later.css";
import { NavLink } from "react-router-dom";
import "../styles/explore.css";
import "../styles/playlist.css";
import ModalForm from "../component/ModalForm/ModalForm";

export default function Playlist() {
  const { videoState, videoDispatch } = useVideoContext();
  const removePlaylist = (id) => {
    videoDispatch({ type: "REMOVE_PLAYLIST", playlistId: id });
  };
  return (
    <div>
      <SideNavbar />
      <div className="home-main">
        <div className="home-heading explore">
          <div>
            <h3>Playlists</h3>
          </div>
        </div>
        {videoState.playlists.length === 0 ? (
          <div>
            <h5>No playlists</h5>
          </div>
        ) : (
          <div className="playlist-main">
            {videoState.playlists.map((playlist) => {
              return (
                <div className="playlist-card">
                  <div
                    className="remove"
                    onClick={() => {
                      removePlaylist(playlist.id);
                    }}
                  >
                    x
                  </div>
                  <NavLink to={`${playlist.id}`}>
                    <div className="playlist-cover">
                      <img src={playlist.img} alt="playlist cover" />
                    </div>
                    <div className="playlist-desc">
                      <div className="playlist-title">
                        <span>{playlist.title}</span>
                      </div>
                      <div className="playlist-desc">
                        <span>{playlist.desc}</span>
                      </div>
                    </div>
                  </NavLink>
                </div>
              );
            })}
            <div className="add-icon">
              <ModalForm createPlaylist={true} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
