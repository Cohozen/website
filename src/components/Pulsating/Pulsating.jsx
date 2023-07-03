import { Container, MAX_LAYERS, Pulse, Wrapper } from "./Pulsating.style.js";

const Pulsating = ({ children, visible, ...rest }) => {
    return (
        <Wrapper>
            <Container>{children}</Container>
            {visible &&
                Array.from(Array(MAX_LAYERS).keys()).map((key) => (
                    <Pulse key={key} layer={key} {...rest} />
                ))}
        </Wrapper>
    );
};

export default Pulsating;