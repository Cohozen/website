import { LinksContainer as StyledLinksContainer } from "./LinksContainer.style.js";

const LinksContainer = (props) => {
    return (
        <StyledLinksContainer>
            {props.children}
        </StyledLinksContainer>
    )
};

export default LinksContainer;