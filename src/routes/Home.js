import React from "react";
import axios from "axios";
import "./Home.css";
import Musiclist from "../components/Musiclist";
import "./Playlist.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function count() {
  const heartCounter = document.querySelector(".heart-counter");
  let number = heartCounter.innerText;
  number = parseInt(number) + 1;
  heartCounter.innerText = number;
}
class Home extends React.Component {
  state = {
    isLoading: true,
    musiclist: [],
  };
  getMusiclist = async () => {
    let musiclist = await axios.get(
      "https://api.odcloud.kr/api/15071046/v1/uddi:abe42915-3cb5-477d-8d53-b7430e5567f0?page=1&perPage=20&serviceKey=nb8LZtISO2%2FlyxkJXw2UuD4J8S5EDRjSn6MpQPiVl5oTT0YjXXUQh4numhVfnNY%2Fi2UC1IhjpN3i%2FlKT3DQqcw%3D%3D"
    );
    musiclist = musiclist.data.data;

    console.log(musiclist);
    this.setState({ musiclist });
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 2000);
    this.getMusiclist();
  }

  render() {
    const { isLoading, musiclist } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader-container">
            <div className="loader"></div>
          </div>
        ) : (
          <div className="playlist-container">
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
                {musiclist.map((list, index) => (
                  <Musiclist
                    img="https://source.unsplash.com/random"
                    key={index}
                    artist={list.아티스트명}
                    title={list.저작물명}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </section>
    );
  }
}

export default Home;
