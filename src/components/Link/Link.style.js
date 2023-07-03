import styled, { css, keyframes } from "styled-components";
import { colors } from "../../main.style.js";

const animation = keyframes`
  from {
    width: 3px;
    height: 3px;
    opacity: 0.4;
    top: 14px;
    left: 12px;
  }

  to {
    width: 50px;
    height: 50px;
    opacity: 0;
    top: -15px;
    left: -15px;
  }
`;

export const Link = styled.a`
  color: ${colors.text};
  font-size: 24px;
  transition: color 0.2s;
  position: relative;
  width: 21px;
  height: 21px;
  display: inline-block;

  svg {
    position: relative;
    z-index: 1;
  }

  :hover {
    color: white;
  }

  &:before {
    content: '';
    background: #000a12;
    position: absolute;
    z-index: 0;
    border-radius: 50%;
    ${({ animate }) => animate && css`
      animation: ${animation} 1.8s linear infinite;
    `}
  }
`;