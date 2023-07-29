import SideNavbar from "../component/SideNavbar/SideNavbar";
import { useVideoContext } from "../context/VideoContext";
import "../styles/home.css";
import CatgeoryVideoCard from "../component/CategoryVideoCard/CategoryVideoCard";
import "../styles/watch-later.css";
import { NavLink } from "react-router-dom";
import "../styles/explore.css";
import "../styles/playlist.css";
import { useParams } from "react-router-dom";

export default function PlaylistDetail() {
  const { videoState } = useVideoContext();
  const { playlistId } = useParams();
  const PlaylistDetail = videoState.playlists.find(
    ({ id }) => id === playlistId
  );
  console.log(PlaylistDetail);
  return (
    <div>
      <SideNavbar />
      <div className="home-main">
        <div className="playlisttitle">
          <h4>{PlaylistDetail.title}</h4>
        </div>
        <div className="home-heading explore">
          <div className="home-categories-list">
            {PlaylistDetail.videos.map((video) => {
              return (
                <NavLink to={`/category/${video.category}/${video._id}`}>
                  <CatgeoryVideoCard {...video} />
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
