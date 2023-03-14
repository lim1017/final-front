import React from "react";
import styled from "styled-components";
import MUButton from "@material-ui/core/Button";

const StyledButton = styled(MUButton)`
  background: linear-gradient(45deg, #ec407a 30%, #f48fb1 90%);
  border-radius: 3;
  border: 0;
  color: white;
  height: 40;
  width: 163;
  padding: 0 30px;
  box-shadow: 0 3px 5px 2px #4a148c 30%;
  margin-left: 0;
  :hover {
    background: linear-gradient(45deg, #f06292 30%, #f8bbd0 90%);
  }
`;

export const MainButton = ({ onClick, children, ...rest }) => {
  return (
    <StyledButton onClick={onClick} className="youtube-button" {...rest}>
      {children}
    </StyledButton>
  );
};
