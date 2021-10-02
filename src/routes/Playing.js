import React from "react";
import "./Playing.css";

class Playing extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <div className="playing-wrapper">
          <div className="playing-container">
            <img src={location.state.img} />
            <h3>{location.state.title}</h3>
            <h5>{location.state.artist}</h5>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Playing;
