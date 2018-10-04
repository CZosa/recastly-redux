import Redux from 'redux';

var videoListReducer = (state = [], action) => {
  //TODO: define a reducer for the videoList field of our state.

  switch(action.type) {
    case "CHANGE_VIDEO_LIST":
      return action.videos;
      break;
    default: 
      return [];
  }
};

export default videoListReducer;
