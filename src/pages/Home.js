import SideNavbar from "../component/SideNavbar/SideNavbar";
import "../styles/home.css";
import { NavLink } from "react-router-dom";
import { categories } from "../db/data";
export default function Home() {
  return (
    <div>
      <SideNavbar />
      <div className="home-main">
        <div className="home-heading">
          <h4>Categories</h4>
        </div>
        <div className="home-categories-list">
          {categories.map(({ thumbnail, category }) => {
            return (
              <NavLink to={`/category/${category}`}>
                <div className="category-card">
                  <img src={thumbnail} alt="thumbnail" />
                  <div className="category-name">
                    <span>{category}</span>
                  </div>
                </div>
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
}
