import { useVideoContext } from "../../context/VideoContext";
import "./playlists.css";

export default function PlaylistsLists({ video, handleClose }) {
  const { videoState, videoDispatch } = useVideoContext();
  const removePlaylist = (id) => {
    videoDispatch({ type: "REMOVE_PLAYLIST", playlistId: id });
  };

  const handleAddVideos = (id) => {
    videoDispatch({
      type: "ADD_VIDEO_TO_PLAYLIST",
      video: video,
      playlistId: id,
    });
    handleClose();
  };
  return (
    <div className="modal-playlist-main">
      {videoState.playlists.length === 0 ? (
        <div></div>
      ) : (
        <div className="list-main">
          {videoState.playlists.map((playlist) => {
            return (
              <div
                className="playlist-card"
                onClick={() => {
                  handleAddVideos(playlist.id);
                }}
              >
                <div
                  className="remove"
                  onClick={() => {
                    removePlaylist(playlist.id);
                  }}
                >
                  x
                </div>

                <div className="modal-playlist-cover">
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
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
