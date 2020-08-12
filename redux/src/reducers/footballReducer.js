import { FETCH_VIDEOS_START, FETCH_VIDEOS_END } from "../actions";

const initialState = {
  videos: [],
  isLoading: false,
  error: "",
};

export const footballReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_VIDEOS_START:
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    case FETCH_VIDEOS_END:
      return {
        ...state,
        isLoading: false,
        videos: action.payload,
      };
    default:
      return state;
  }
};
