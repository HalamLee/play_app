import React from "react";
import "./Playing.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faSync } from "@fortawesome/free-solid-svg-icons";
import { faStepBackward } from "@fortawesome/free-solid-svg-icons";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { faStepForward } from "@fortawesome/free-solid-svg-icons";
import { faRandom } from "@fortawesome/free-solid-svg-icons";

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
            <Link to="/">
              <div className="nav">
                <FontAwesomeIcon icon={faArrowLeft} className="arrow-icon" />
              </div>
            </Link>
            <img src={location.state.img} alt="img" />
            <h3>{location.state.title}</h3>
            <h5>{location.state.artist}</h5>
            <div className="playing-btns">
              <FontAwesomeIcon
                icon={faSync}
                className="sync-icon playing-btn"
              />
              <FontAwesomeIcon
                icon={faStepBackward}
                className="stepBackward-icon playing-btn"
              />
              <FontAwesomeIcon
                icon={faPlayCircle}
                className="playCircle-icon playing-btn"
              />
              <FontAwesomeIcon
                icon={faStepForward}
                className="stepForward-icon playing-btn"
              />
              <FontAwesomeIcon
                icon={faRandom}
                className="random-icon playing-btn"
              />
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Playing;
