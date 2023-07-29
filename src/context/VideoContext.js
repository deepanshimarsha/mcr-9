import { createContext, useReducer, useContext } from "react";
import { videoReducer } from "../reducer/videoReducer";
import { videos } from "../db/data";

const VideoContext = createContext(null);

const VideoContextProvider = ({ children }) => {
  const initialVideoState = {
    videos: videos,
    playlists: [],
    watchLater: [],
  };

  const [videoState, videoDispatch] = useReducer(
    videoReducer,
    initialVideoState
  );
  return (
    <VideoContext.Provider value={{ videoState, videoDispatch }}>
      {children}
    </VideoContext.Provider>
  );
};

const useVideoContext = () => useContext(VideoContext);

export { useVideoContext, VideoContextProvider };
