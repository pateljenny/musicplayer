import { ADD_SONGS, REMOVE_SONGS } from '../action/index';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_SONGS: {
      return [...state, ...action.songs];
    }
    case REMOVE_SONGS: {
      return state.filter((song, index) => index !== action.id);
    }
    default: {
      return state;
    }
  }
};  