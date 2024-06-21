import { legacy_createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import SongData from "../SongData";

const initialState = {
  SongData: SongData,
  likedSongs: {},
  playerInfo: {
    song: null,
    imageUrl: null,
    isPlaying: false,
  },
};
const reducer = (state = initialState, action) => {
  if (action.type === "update_player") {
    const { song, imageUrl } = action.payload;
    return {
      ...state,
      playerInfo: { song, imageUrl, isPlaying: !state.playerInfo.isPlaying },
    };
  }
  return state;
};

const store = legacy_createStore(reducer, composeWithDevTools());
export default store;
