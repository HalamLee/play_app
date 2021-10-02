import React from "react";
import "./Home.css";
import Playlist from "./Playlist";

class Home extends React.Component {
  state = {
    isLoading: true,
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 3000);
  }

  render() {
    const { isLoading } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader-container">
            <div className="loader"></div>
          </div>
        ) : (
          <div className="playlist-container">
            <Playlist />
          </div>
        )}
      </section>
    );
  }
}

export default Home;
