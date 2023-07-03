import styled from "styled-components";
import { colors } from "../../main.style.js";

export const Button = styled.div`
  align-items: center;
  background: ${({ color }) => color || colors.third};
  border-radius: 32px;
  color: white;
  display: flex;
  height: 32px;
  justify-content: center;
  width: 130px;
`;