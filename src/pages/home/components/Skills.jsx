import Skill from "../../../components/Skill/Skill.jsx";
import SkillsContainer from "../../../components/SkillsContainer/SkillsContainer.jsx";

import SkillIconsCs from "../../../components/SvgIcons/SkillIconsCs.jsx";
import SkillIconsDotnet from "../../../components/SvgIcons/SkillIconsDotnet.jsx";
import SkillIconsAzureDark from "../../../components/SvgIcons/SkillIconsAzureDark.jsx";
import SkillIconsJavascript from "../../../components/SvgIcons/SkillIconsJavascript.jsx";
import SkillIconsTypescript from "../../../components/SvgIcons/SkillIconsTypescript.jsx";
import SkillIconsReactDark from "../../../components/SvgIcons/SkillIconsReactDark.jsx";
import SkillIconsDocker from "../../../components/SvgIcons/SkillIconsDocker.jsx";
import SkillIconsNodejsDark from "../../../components/SvgIcons/SkillIconsNodejsDark.jsx";
import SolarMenuDotsBoldDuotone from "../../../components/SvgIcons/SolarMenuDotsBoldDuotone.jsx";
import SkillIconsAwsDark from "../../../components/SvgIcons/SkillIconsAwsDark.jsx";
import SkillIconsNextjsDark from "../../../components/SvgIcons/SkillIconsNextjsDark.jsx";

const Skills = () => {
    return (
        <SkillsContainer>
            <Skill title={["Javascript"]}>
                <SkillIconsJavascript/>
            </Skill>
            <Skill title={["Typescript"]}>
                <SkillIconsTypescript/>
            </Skill>
            <Skill title={["Node.js"]}>
                <SkillIconsNodejsDark/>
            </Skill>
            <Skill title={["React"]}>
                <SkillIconsReactDark/>
            </Skill>
            <Skill title={["Next.js"]}>
                <SkillIconsNextjsDark/>
            </Skill>
            <Skill title={["C#"]}>
                <SkillIconsCs/>
            </Skill>
            <Skill title={[".NET Core"]}>
                <SkillIconsDotnet/>
            </Skill>
            <Skill title={["Microsoft Azure"]}>
                <SkillIconsAzureDark/>
            </Skill>
            <Skill title={["AWS"]}>
                <SkillIconsAwsDark/>
            </Skill>
            <Skill title={["Docker"]}>
                <SkillIconsDocker/>
            </Skill>

            <Skill title={['Git', 'Redis', 'MongoDb', 'Sql Server', 'PostgreSql']} more={true}>
                <SolarMenuDotsBoldDuotone/>
            </Skill>
        </SkillsContainer>
    )
}

export default Skills;