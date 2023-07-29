import SideNavbar from "../component/SideNavbar/SideNavbar";
import { useVideoContext } from "../context/VideoContext";
import "../styles/home.css";
import CatgeoryVideoCard from "../component/CategoryVideoCard/CategoryVideoCard";
import "../styles/watch-later.css";
import { NavLink } from "react-router-dom";
import "../styles/explore.css";
import { useState } from "react";

export default function Explore() {
  const { videoState, videoDispatch } = useVideoContext();
  const [input, setInput] = useState("");
  return (
    <div>
      <SideNavbar />
      <div className="home-main">
        <div className="home-heading explore">
          <div>
            <h3>Explore</h3>
          </div>
          <div className="search-bar">
            <input
              value={input}
              placeholder="Search Video By Title"
              onChange={(e) => {
                setInput(e.target.value);
                videoDispatch({
                  type: "FILTER_VIDEOS",
                  keyword: e.target.value,
                });
              }}
            />
          </div>
        </div>

        <div className="home-categories-list">
          {videoState.videos.map((video) => {
            return (
              <NavLink to={`/category/${video.category}/${video._id}`}>
                <CatgeoryVideoCard {...video} />
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
}
