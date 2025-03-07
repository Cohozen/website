import {useMediaQuery} from "react-responsive";

import SolarStarBold from "../../components/SvgIcons/SolarStarBold.jsx";
import SolarMoonBold from "../../components/SvgIcons/SolarMoonBold.jsx";
import SolarUfo3BoldDuotone from "../../components/SvgIcons/SolarUfo3BoldDuotone.jsx";

import {
    BackgroundLayout, BackgroundShadow, Layout, Line, Meteor, Moon, Name, Subtitle,
} from "./Home.style.js";

import Links from "./components/Links.jsx";
import Skills from "./components/Skills.jsx";
import Star from "../../components/Star/Star.jsx";

const Home = () => {
    const isMobile = useMediaQuery({query: "(max-width: 1024px)"});
    return (<Layout>
        <BackgroundLayout>
            {Array.from({length: isMobile ? 15 : 30}, (_, k) => k + 1).map((index) => (<Star key={index}>
                <SolarStarBold/>
            </Star>))}
            <Moon>
                <SolarMoonBold/>
            </Moon>
        </BackgroundLayout>
        <BackgroundShadow/>
        <Meteor>
            <SolarUfo3BoldDuotone/>
        </Meteor>

        <Name>Corentin Le Gal</Name>
        <Line/>
        <Subtitle>Développeur fullstack</Subtitle>

        <Links/>
        <Skills/>

        {/*{(import.meta.env.DEV || (import.meta.env.PROD && import.meta.env.VITE_URL_LIVETRACK)) ?*/}
        {/*    <Pulsating visible={true} color={colors.third} height={32} width={132}>*/}
        {/*        <Link to="/liveTrack">*/}
        {/*            <Button>LiveTrack</Button>*/}
        {/*        </Link>*/}
        {/*    </Pulsating> : null}*/}
    </Layout>);
};

export default Home;
