import { Button as StyledButton } from "./Button.style.js";

const Button = ({ children, ...rest }) => {
    return (
        <StyledButton {...rest}>
            {children}
        </StyledButton>
    );
};

export default Button;