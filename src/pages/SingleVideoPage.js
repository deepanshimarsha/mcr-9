import { NavLink, useParams } from "react-router-dom";
import SideNavbar from "../component/SideNavbar/SideNavbar";
import { videos } from "../db/data";
import { categories } from "../db/data";
import { useVideoContext } from "../context/VideoContext";

import "../styles/single-video-page.css";
import "../styles/home.css";
import YoutubeVideoCard from "../component/YoutubeVideoCard/YoutubeVideoCard";
import { useState } from "react";
import ModalForm from "../component/ModalForm/ModalForm";
export default function SingleVideoPage() {
  const { categoryName, videoId } = useParams();

  const [notes, setNotes] = useState([]);
  const { videoState, videoDispatch } = useVideoContext();
  const video = videos.find(
    ({ category, _id }) => category === categoryName && _id === Number(videoId)
  );
  const categoryDetail = categories.find(
    ({ category }) => category === categoryName
  );

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
    <div>
      <SideNavbar />
      <div className="home-main single-video-page">
        <div className="home-left">
          <YoutubeVideoCard {...video} />
          <div className="yt-card-footer">
            <div className="vid-title">
              <img src={categoryDetail.thumbnail} alt="thumbnail" />
              {video.title}
            </div>
            <div className="action-btn">
              <div className="watch-later" onClick={WatchLater}>
                <i class="far fa-clock"></i>
              </div>
              <div className="add-to-playlist">
                <ModalForm playlist={video} />
              </div>
              <div className="add-notes">
                <ModalForm notes={setNotes} />
              </div>
            </div>
          </div>
          <div className="horizontal-div">
            <hr></hr>
          </div>
          <div className="notes">
            <div className="note-heading">
              <h3>My Notes</h3>
            </div>
            <div className="notes-list">
              {notes &&
                notes.map((note) => {
                  return (
                    <div className="single-note">
                      <div>{note.note}</div>
                      <div className="note-action-btn">
                        <ModalForm
                          editNote={note}
                          setEditedNotes={setNotes}
                          allNotes={notes}
                        />
                        <i
                          class="fa fa-trash-o"
                          onClick={() => {
                            setNotes(notes.filter(({ id }) => id !== note.id));
                          }}
                        ></i>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>

        <div className="home-right">
          <div className="right-heading">
            <h5>More Videos</h5>
          </div>
          <div className="all-videos-list">
            {videos.map(({ thumbnail, title, creator, _id, category }) => {
              return (
                <NavLink to={`/category/${category}/${_id}`}>
                  <div className="video-card">
                    <div className="video-thumbnail">
                      <img src={thumbnail} alt="thumbnail" />
                    </div>
                    <div className="video-desc">
                      <div className="video-title">
                        <span>{title}</span>
                      </div>
                      <div className="video-creator">
                        <span>{creator}</span>
                      </div>
                    </div>
                  </div>
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
