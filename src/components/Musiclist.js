import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import "./Musiclist.css";

function Musiclist({ id, img, artist, title }) {
  return (
    <Link
      to={{
        pathname: `/playing/${id}`,
        state: {
          img,
          artist,
          title,
        },
      }}>
      <div className="musicList">
        <img className="music-cover" src={img} alt="img"></img>
        <FontAwesomeIcon icon={faPlay} className="play-icon" />
        <div className="music-info">
          <h5 className="music-artist">{artist}</h5>
          <h3 className="music-title">{title}</h3>
        </div>
      </div>
    </Link>
  );
}

export default Musiclist;
