import styled from "styled-components";
import { colors } from "../../main.style.js";

export const SkillsContainer = styled.div`
  font-size: 48px;
  margin-top: 50px;
  color: ${colors.secondary};
  text-align: center;
  margin-left: -20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  z-index: 2;

  @media (max-width: 1024px) {
  }
`;