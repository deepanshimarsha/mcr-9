import { videos } from "../db/data";
const videoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_WATCH_LATER": {
      return { ...state, watchLater: [...state.watchLater, action.video] };
    }
    case "FILTER_VIDEOS": {
      let filteredVideos = videos;
      if (action.keyword === "") {
        filteredVideos = videos;
      } else {
        filteredVideos = filteredVideos.filter(({ title }) =>
          title.toLowerCase().includes(action.keyword.toLowerCase())
        );
      }

      return {
        ...state,
        videos: filteredVideos,
      };
    }
    case "ADD_PLAYLIST": {
      return { ...state, playlists: [...state.playlists, action.playlist] };
    }
    case "REMOVE_PLAYLIST": {
      return {
        ...state,
        playlists: state.playlists.filter(({ id }) => id !== action.playlistId),
      };
    }
    case "ADD_VIDEO_TO_PLAYLIST": {
      return {
        ...state,
        playlists: state.playlists.map((playlist) => {
          if (playlist.id === action.playlistId) {
            return { ...playlist, videos: [...playlist.videos, action.video] };
          } else {
            return playlist;
          }
        }),
      };
    }
    default:
      throw new Error("Unknown action type");
  }
};

export { videoReducer };
