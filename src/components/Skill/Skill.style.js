import styled, { css } from 'styled-components';

export const Layout = styled.div`
  position: relative;
  margin-left: 20px;
  ${({ more }) =>
          more &&
          css`
            font-size: 52px;
            display: flex;
            align-items: center;
            margin-left: 20px;
          `}
`;

export const Popper = styled.div`
  display: none;
  position: absolute;
  background: white;
  padding: 12px 16px;
  border-radius: 8px;
  top: 60px;
  font-size: 14px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 4px #000a12;
  font-family: sans-serif;
  z-index: 2;
  transition: opacity 0.2s;

  p {
    margin: 0;
    white-space: nowrap;

    + p {
      margin-top: 8px;
    }
  }

  ${Layout}:hover & {
    display: block;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;