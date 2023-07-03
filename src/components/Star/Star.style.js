import styled, { css } from "styled-components";

export const Star = styled.div`
  position: absolute;
  transition: color 0.2s;
  ${({ top, left, rotation, scale, opacity }) =>
          css`
            top: ${top}%;
            left: ${left}%;
            transform: rotate(${rotation}deg);
            font-size: ${scale}px;
            color: #0d171c;
            opacity: ${opacity};
          `};

  :hover {
    color: #1a2e38;
    opacity: 1;
  }
`;