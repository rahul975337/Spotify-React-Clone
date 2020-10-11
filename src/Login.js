import React from "react";
import "./Login.css";
import { loginUrl } from "./spotify";

function Login() {
  return (
    <div className="login">
      {/* SPOTIFY LOGO */}
      <img
        src="https://www.basspromotions.com/wp-content/uploads/2019/05/Spotify_Logo_RGB_White.png"
        alt=""
      />
      {/* LOGIN BUTTON SPOTIFY */}
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default Login;
// https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg
