import { Star as StyledStar } from './Star.style.js';

const Star = (props) => {
    const randomLocalization = () => ({
        top: Math.floor(Math.random() * 100),
        left: Math.floor(Math.random() * 100),
        rotation: Math.floor(Math.random() * Math.floor(360)),
        scale: Math.floor(Math.random() * Math.floor(32 - 12) + 12),
        opacity: Math.random(),
    });

    return (
        <StyledStar {...randomLocalization()}>
            {props.children}
        </StyledStar>
    )
}

export default Star;