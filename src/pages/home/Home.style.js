import styled, { keyframes } from 'styled-components';
import { colors } from "../../main.style.js";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  position: relative;
  overflow: hidden;
`;

export const Name = styled.p`
  color: ${colors.text};
  font-size: 128px;
  line-height: 128px;
  margin: 0;
  letter-spacing: 6px;
  font-family: 'Amatic SC', cursive;
  text-shadow: 0 0 10px #212121;
  text-transform: lowercase;
  text-align: center;
  position: relative;
  z-index: 2;
`;

export const BackgroundAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const width = (window.innerWidth > window.innerHeight && window.innerWidth) || window.innerHeight;

export const BackgroundLayout = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: ${width}px;
  top: -${(window.innerWidth - window.innerHeight) / 2}px;
  animation: 240s ${BackgroundAnimation} linear infinite;
  transform-origin: center;
  z-index: 0;
`;

export const BackgroundShadow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 300px;
  width: 300px;
  border-radius: 50%;
  box-shadow: 0 0 800px 70px #203946;
  z-index: 0;
  background: ${colors.primary};
  transform: translate(-50%, -50%);
`;

export const Moon = styled.div`
  position: absolute;
  transition: color 0.2s;
  top: 35%;
  left: 30%;
  transform: rotate(0deg);
  font-size: 45px;
  color: ${colors.text};
  opacity: 1;
`;

export const Line = styled.div`
  height: 2px;
  width: 32px;
  background: ${colors.secondary};
  margin: 4px 0 8px;
  z-index: 2;
`;

export const Subtitle = styled.p`
  font-size: 28px;
  margin: 0 0 42px 0;
  font-family: 'Amatic SC', cursive;
  color: ${colors.text};
  position: relative;
  z-index: 2;
`;

export const MeteorAnimation = keyframes`
  from {
    top: 15%;
    right: -100px;
    transform: rotate(10deg);
  }
  to {
    top: 80%;
    right: 120%;
    color: ${colors.primary};
    transform: rotate(20deg);
  }
`;

export const Meteor = styled.div`
  font-size: 65px;
  color: #677A86;
  rotate: 180deg;
  z-index: 1;
  position: absolute;
  animation: 30s ${MeteorAnimation} linear infinite;
`;
