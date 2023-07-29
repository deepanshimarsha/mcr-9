import { NavLink } from "react-router-dom";
import "./side-navbar.css";

export default function SideNavbar() {
  return (
    <div className="d-flex flex-column flex-shrink-0 side-navbar">
      <ul className="nav  nav-flush flex-column mb-auto text-center nav-links">
        <li className="nav-item">
          <NavLink
            to="/"
            style={({ isActive }) => ({
              fontWeight: isActive ? "700" : "400",
            })}
            className="nav-link py-3"
            aria-current="page"
            title=""
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-original-title="Home"
          >
            <div className="nav-icon">
              <svg
                aria-label="Home"
                class="_ab6-"
                color="rgb(0, 0, 0)"
                fill="rgb(0, 0, 0)"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <path
                  d="M9.005 16.545a2.997 2.997 0 0 1 2.997-2.997A2.997 2.997 0 0 1 15 16.545V22h7V11.543L12 2 2 11.543V22h7.005Z"
                  fill="none"
                  stroke="currentColor"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></path>
              </svg>
            </div>
            <div className="nav-item-heading">Home</div>
            {/* </svg> */}
          </NavLink>
        </li>

        <li className="nav-item"></li>
        <li className="nav-item">
          <NavLink
            to="/explore"
            style={({ isActive }) => ({
              fontWeight: isActive ? "700" : "400",
            })}
            className="nav-link py-3 "
            title=""
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-original-title="Products"
          >
            <div className="nav-icon">
              <svg
                aria-label="Explore"
                class="_ab6-"
                color="rgb(0, 0, 0)"
                fill="rgb(0, 0, 0)"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <polygon
                  fill="none"
                  points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></polygon>
                <polygon
                  fill-rule="evenodd"
                  points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056"
                ></polygon>
                <circle
                  cx="12.001"
                  cy="12.005"
                  fill="none"
                  r="10.5"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></circle>
              </svg>
            </div>
            <div className="nav-item-heading">Explore</div>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/playlist"
            style={({ isActive }) => ({
              fontWeight: isActive ? "700" : "400",
            })}
            className="nav-link py-3"
            title=""
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-original-title="Dashboard"
          >
            <div className="nav-icon">
              <i class="fas fa-sliders-h side-nav-icon"></i>
            </div>
            <div className="nav-item-heading">Playlist</div>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/watchlater"
            style={({ isActive }) => ({
              fontWeight: isActive ? "700" : "400",
            })}
            className="nav-link py-3 "
            title=""
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-original-title="Customers"
          >
            <div className="nav-icon">
              <i class="far fa-clock side-nav-icon"></i>
            </div>
            <div className="nav-item-heading">Watch Later</div>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
