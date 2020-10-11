import React, { useEffect, useState } from "react";
import Login from "./Login";
import "./App.css";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";

const spotify = new SpotifyWebApi();
function App() {
  const [token, setToken] = useState(null);
  // useeffect runs code on a given condition
  useEffect(() => {
    ///code
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);
      spotify.getMe().then(user=>{
        console.log('❤',user);
      })
    }
    console.log("my token =>", _token);
    // return () => {
    //   cleanup;
    // };
  }, []);
  //bem naming method
  return (
    <div className="app">{token ? <Player/> : <Login />}</div>
  );
}

export default App;
// c7dc663f978a4c3eaf1fac6bebc57829   client id

///Step - 1 ->Click Login Button
///Step - 2 ->Redirect to Spotify login page
///Step - 3 ->Redirect to home page once logged in
