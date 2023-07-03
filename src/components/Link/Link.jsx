import { Link as StyledLink } from "./Link.style.js";

const Link = ({ href, animate, ...props }) => {
    return (
        <StyledLink
            target="_blank"
            rel="noopener"
            href={href}
            animate={animate ? 1 : 0}
        >
            {props.children}
        </StyledLink>
    )
};

export default Link;
