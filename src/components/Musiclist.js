import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import "./Musiclist.css";

function Musiclist({ img, artist, title }) {
  return (
    <div className="musicList">
      <img className="music-cover" src={img} alt="img"></img>
      <FontAwesomeIcon icon={faPlay} className="play-icon" />
      <div className="music-info">
        <h5 className="music-artist">{artist}</h5>
        <h3 className="music-title">{title}</h3>
      </div>
    </div>
  );
}

export default Musiclist;
