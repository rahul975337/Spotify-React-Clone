import React, { useEffect, useState } from "react";
import Login from "./Login";
import "./App.css";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";
const spotify = new SpotifyWebApi();
function App() {
  // const [token, setToken] = useState(null);
  const [{ user, token }, dispatch] = useDataLayerValue();
  // useeffect runs code on a given condition
  useEffect(() => {
    ///code
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
        console.log("hey", playlists);
      });
    }
  }, []);

  //bem naming method
  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
// c7dc663f978a4c3eaf1fac6bebc57829   client id

///Step - 1 ->Click Login Button
///Step - 2 ->Redirect to Spotify login page
///Step - 3 ->Redirect to home page once logged in

// 🧡 BQC6oDpaXkCyQhNKD0L77zgllZoiKHm0o1_7QiO5zRzJ__MXo-YZCvfCgrwIscs7C9CwdC5I65JGZCh8L9JP5JuJZWBkAP2LTLqAF4yO_a3DOs_NWRXJGqJmVsky6b_lvDkwOFj_XEmWre9I7QRF79e8D16u8HdpgVZTodwqqNPbcNxR
