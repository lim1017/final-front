import React, { useState } from "react";
import YouTube from "react-youtube";
import MUButton from "@material-ui/core/Button";
import { MainButton } from "../components/MainButton/MainButton";

const Youtube = () => {
  const [button1, setButton1] = useState({
    color: "linear-gradient(45deg, #ec407a 30%, #f48fb1 90%)",
    x: 0,
  });

  const style = {
    background: "linear-gradient(45deg, #ec407a 30%, #f48fb1 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 40,
    width: 163,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px #4a148c 30%",
    marginLeft: 0,
  };

  const [youtubeVideo, setYoutubeVideo] = useState("PHe0bXAIuk0");

  const opts = {
    height: "500",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const _onReady = (event) => {
    event.target.pauseVideo();
  };

  return (
    <>
      <div className="youtube-review-container">
        <div className="youtube-video-container">
          <div className="youtube-video">
            <YouTube videoId={youtubeVideo} opts={opts} onReady={_onReady} />
          </div>
          <div className="youtube-video-buttons-container">
            <MainButton
              onClick={() => setYoutubeVideo("PHe0bXAIuk0")}
              className="youtube-button"
              style={{
                marginRight: "1em",
                marginLeft: "1em",
                marginTop: "4px",
              }}
            >
              How The Economy Works - Ray Dalio
            </MainButton>
            <MainButton
              style={{
                marginRight: "1em",
                marginLeft: "1em",
                marginTop: "4px",
              }}
              onClick={() => setYoutubeVideo("F3QpgXBtDeo")}
              className="youtube-button"
            >
              How The Stock Market Works
            </MainButton>
            <MainButton
              style={{
                marginRight: "1em",
                marginLeft: "1em",
                marginTop: "4px",
              }}
              onClick={() => setYoutubeVideo("Dugn51K_6WA")}
              className="youtube-button"
            >
              Money & Finance - Crash Course
            </MainButton>
            <MainButton
              style={{
                marginRight: "1em",
                marginLeft: "1em",
                marginTop: "4px",
              }}
              onClick={() => setYoutubeVideo("EfBSN0xTBo0")}
              className="youtube-button"
            >
              Financial Wisdom - Kevin Hart
            </MainButton>
            <MainButton
              style={{
                marginRight: "1em",
                marginLeft: "1em",
                marginTop: "4px",
              }}
              onClick={() => setYoutubeVideo("svbkVpeuwE4")}
              className="youtube-button"
            >
              Compound Interest - Warren Buffet
            </MainButton>
            <MainButton
              style={{
                marginRight: "1em",
                marginLeft: "1em",
                marginTop: "4px",
              }}
              onClick={() => setYoutubeVideo("kpjZZBPQvDM")}
              className="youtube-button"
            >
              Financial Advice - Tony Robbins
            </MainButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default Youtube;
