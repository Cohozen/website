import { SkillsContainer as StyledSkillsContainer } from "./SkillsContainer.style.js";

const SkillsContainer = (props) => {
    return (
        <StyledSkillsContainer>
            {props.children}
        </StyledSkillsContainer>
    )
};

export default SkillsContainer;