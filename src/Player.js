import React from "react";
import Body from "./Body";
import Footer from "./Footer";
import "./Player.css";
import Sidebar from "./Sidebar";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player_body">
        {/* SIDEBAR */}
        <Sidebar />
        {/* BODY */}
        <Body  spotify={spotify}/>
      </div>
      {/* FOOTER */}
      <Footer/>
    </div>
  );
}

export default Player;
