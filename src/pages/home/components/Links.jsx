import LinksContainer from "../../../components/LinksContainer/LinksContainer.jsx";
import Link from "../../../components/Link/Link.jsx";

import LineMdGithubLoop from "../../../components/SvgIcons/LineMdGithubLoop.jsx";
import LineMdLinkedin from "../../../components/SvgIcons/LineMdLinkedin.jsx";
import LineMdEmailTwotone from "../../../components/SvgIcons/LineMdEmailTwotone.jsx";

const Links = () => {
    return (
        <LinksContainer>
            <Link href="https://github.com/Cohozen">
                <LineMdGithubLoop/>
            </Link>
            <Link href="https://www.linkedin.com/in/corentin--le--gal/" animate>
                <LineMdLinkedin/>
            </Link>
            <Link href="mailto:corentin.legal@proton.me">
                <LineMdEmailTwotone/>
            </Link>
        </LinksContainer>
    );
};

export default Links;