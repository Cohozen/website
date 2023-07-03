import styled, { keyframes } from "styled-components";

export const MAX_LAYERS = 2;

const pulse = keyframes`
  0%,10% {
    opacity: 0;
    transform: scale(1.1);
  }
  80% {
    opacity: 0.7;
    transform: scale(1.15,1.4);
  }
  81%, 100% {
    opacity: 0;
    transform: scale(1);
  }
`;

const Scale = keyframes`
  0% {
    transform: scale(1);
  }
  35%, 80% {
    transform: scale(1.1,1.35);
  }
  100% {
    transform: scale(1);
  }
`;

export const Pulse = styled.div`
  animation: ${({ layer }) => (layer ? pulse : Scale)} 1.5s infinite;
  background: transparent;
  border-radius: 32px;
  border: 1px solid ${({ color }) => color};
  height: ${({ layer = 0, height }) => height + layer * 8}px;
  position: absolute;
  width: ${({ layer = 0, width }) => width + layer * 8}px;
  z-index: ${({ layer = 0 }) => MAX_LAYERS - layer};
`;

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  bottom: 50px;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
`;

export const Container = styled.div`
  z-index: ${MAX_LAYERS + 1};
`;