import React from "react";
import "./Playlist.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

function count() {
  const heartCounter = document.querySelector(".heart-counter");
  let number = heartCounter.innerText;
  number = parseInt(number) + 1;
  heartCounter.innerText = number;
}

function Playlist({ id, title }) {
  return (
    <div className="playlist">
      <div className="info">
        <img src="img/profile.png" alt="profile"></img>
        <h3>Lami</h3>
        <h5>Front-end Web Developer</h5>
      </div>
      <div className="btns">
        <div className="btn portfolio-btn">
          <a
            href="https://halamlee.notion.site/Lami-a84fe6caedc34565badcd24913a18f4a"
            target="_blank"
            rel="noreferrer">
            <img src="img/notion.png" alt="notion"></img>
            <h5>Portfolio</h5>
          </a>
        </div>
        <div className="btn heart-btn" onClick={count}>
          <FontAwesomeIcon icon={faHeart} className="heart" />
          <h5 className="heart-counter">19990908</h5>
          {/* 하트 누른 숫자 */}
        </div>
      </div>
      <div className="musicList-container">
        <div className="musicList">
          <img
            className="music-cover"
            src="img/profile.png"
            alt="coverImg"></img>
          <FontAwesomeIcon icon={faPlay} className="play-icon" />
          <div className="music-info">
            <h5 className="music-artist">Lami</h5>
            <h3 className="music-title">{title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Playlist;
