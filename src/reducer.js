export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //make it null after development
  // token:
  //   "BQC6oDpaXkCyQhNKD0L77zgllZoiKHm0o1_7QiO5zRzJ__MXo-YZCvfCgrwIscs7C9CwdC5I65JGZCh8L9JP5JuJZWBkAP2LTLqAF4yO_a3DOs_NWRXJGqJmVsky6b_lvDkwOFj_XEmWre9I7QRF79e8D16u8HdpgVZTodwqqNPbcNxR",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};
export default reducer;
