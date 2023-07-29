import "./youtube-card.css";
import { useVideoContext } from "../../context/VideoContext";

export default function YoutubeVideoCard(video) {
  const { src, thumbnail, title } = video;
  const { videoState, videoDispatch } = useVideoContext();

  const WatchLater = () => {
    if (videoState.watchLater) {
      if (!videoState.watchLater.find(({ _id }) => _id === video._id)) {
        videoDispatch({ type: "ADD_TO_WATCH_LATER", video: video });
      }
    } else {
      videoDispatch({ type: "ADD_TO_WATCH_LATER", video: video });
    }
  };

  return (
    <div className="youtube-card">
      <img src={thumbnail} alt="thumbnail" />
      <div className="banner icon">
        <div className="share-icon" onClick={WatchLater}>
          <div>
            <i class="far fa-clock banner-icon"></i>
          </div>
          <div>Watch Later</div>
        </div>
        <div className="watch-later-icon">
          <div>
            <i class="fa fa-share banner-icon"></i>
          </div>
          <div>Share</div>
        </div>
      </div>

      <div className="  banner  bottom-banner">
        <div>
          watch on{" "}
          <span>
            <i class="fab fa-youtube"></i>
          </span>
          <span> Youtube</span>
        </div>
      </div>
      <div className=" banner top-banner">
        <div>{title}</div>
      </div>
      <div
        className="banner youtube-btn"
        onClick={() => {
          window.location.href = src;
        }}
      >
        <i class="fa fa-youtube-play"></i>
      </div>
    </div>
  );
}
