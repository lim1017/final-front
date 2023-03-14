import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import YouTubeIcon from "@material-ui/icons/YouTube";
import styled from "styled-components";

const Youtube = styled(YouTubeIcon)`
  font-size: 40px;
  :hover {
    cursor: pointer;
  }
`;
export const WelcomePaper = () => {
  return (
    <Paper
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        top: "5%",
        marginLeft: "auto",
        marginRight: "auto",
        padding: "1rem",
        background: "gray",
        width: "50%",
        zIndex: 10,
      }}
    >
      <h2>Welcome </h2>
      <p>To get started simply register with any name, no password required.</p>

      <p>
        We also have a sample account, pre seeded <b>example</b>
      </p>

      <div style={{ display: "flex", alignItems: "center" }}>
        <Youtube /> Demo
      </div>
    </Paper>
  );
};
