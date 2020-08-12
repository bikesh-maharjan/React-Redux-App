import axios from "axios";

export const FETCH_VIDEOS_START = "FETCH_VIDEOS_START";
export const FETCH_VIDEOS_END = "FETCH_VIDEOS_END";

export const fetchVideos = () => (dispatch) => {
  dispatch({ type: FETCH_VIDEOS_START });

  axios
    .get("https://www.scorebat.com/video-api/v1/")
    .then((res) => {
      dispatch({ type: FETCH_VIDEOS_END, payload: res.data });
    })
    .catch((err) => console.log(err));
};

const thunk = (store) => (next) => (action) => {
  if (typeof action === "object") {
    next(action);
  } else if (typeof action === "function") {
    action(store.dispatch);
  }
};
