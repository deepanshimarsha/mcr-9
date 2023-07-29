import { useParams } from "react-router-dom";
import SideNavbar from "../component/SideNavbar/SideNavbar";
import { videos } from "../db/data";
import { NavLink } from "react-router-dom";
import "../styles/home.css";
import CatgeoryVideoCard from "../component/CategoryVideoCard/CategoryVideoCard";
export default function CategoryVideoListing() {
  const { categoryName } = useParams();
  const categoryVideos = videos.filter(
    ({ category }) => category === categoryName
  );

  return (
    <div>
      <SideNavbar />
      <div className="home-main">
        <div className="home-heading">
          <h4>{categoryName}</h4>
        </div>
        <div className="home-categories-list">
          {categoryVideos.map((video) => {
            return (
              <NavLink to={`${video._id}`}>
                <CatgeoryVideoCard {...video} />
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
}
