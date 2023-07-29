import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CategoryVideoListing from "./pages/CategoryVideoListing";
import SingleVideoPage from "./pages/SingleVideoPage";
import WatchLater from "./pages/WatchLater";
import Explore from "./pages/Explore";
import Playlist from "./pages/Playlist";
import PlaylistDetail from "./pages/PlaylistDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/category/:categoryName"
          element={<CategoryVideoListing />}
        />
        <Route
          path="/category/:categoryName/:videoId"
          element={<SingleVideoPage />}
        />
        <Route path="/watchlater" element={<WatchLater />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/playlist/:playlistId" element={<PlaylistDetail />} />
      </Routes>
    </div>
  );
}

export default App;
