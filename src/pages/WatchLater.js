import SideNavbar from "../component/SideNavbar/SideNavbar";
import { useVideoContext } from "../context/VideoContext";
import "../styles/home.css";
import CatgeoryVideoCard from "../component/CategoryVideoCard/CategoryVideoCard";
import "../styles/watch-later.css";
import { NavLink } from "react-router-dom";

export default function WatchLater() {
  const { videoState } = useVideoContext();
  return (
    <div>
      <SideNavbar />
      <div className="home-main">
        <div className="home-heading">
          <h4>Watch Later</h4>
        </div>

        {videoState.watchLater.length === 0 ? (
          <div className="empty">
            <span className="para">No Videos</span>
          </div>
        ) : (
          <div className="home-categories-list">
            {videoState.watchLater.map((video) => {
              return (
                <NavLink to={`/category/${video.category}/${video._id}`}>
                  <CatgeoryVideoCard {...video} />
                </NavLink>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
