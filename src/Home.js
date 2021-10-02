import React from "react";
import axios from "axios";
import "./Home.css";
import Playlist from "./Playlist";

class Home extends React.Component {
  state = {
    isLoading: true,
    playlist: [],
  };
  getPlaylist = async () => {
    let playlist = await axios.get(
      "https://jsonplaceholder.typicode.com/albums"
    );
    playlist = playlist.data;
    this.setState({ playlist });
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 2000);
    this.getPlaylist();
  }

  render() {
    const { isLoading, playlist } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader-container">
            <div className="loader"></div>
          </div>
        ) : (
          <div className="playlist-container">
            {playlist.map((list) => (
              <Playlist id={list.id} title={list.title} />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default Home;
