import styled from "styled-components";
import { Link } from "../Link/Link.style.js";

export const LinksContainer = styled.div`
  ${Link} + ${Link} {
    margin-left: 16px;
  }
`;