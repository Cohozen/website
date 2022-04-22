import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEllipsisH, faEnvelopeSquare, faMeteor, faMoon, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import {
	BackgroundLayout,
	BackgroundShadow,
	GlobalStyle,
	Layout,
	Line,
	Link,
	LinksContainer,
	Meteor,
	Moon,
	Name,
	SkillsContainer,
	Star,
	Subtitle,
} from './App.styles';
import Skill from './skill/Skill';

const randomLocalization = () => ({
	top: Math.floor(Math.random() * 100),
	left: Math.floor(Math.random() * 100),
	rotation: Math.floor(Math.random() * Math.floor(360)),
	scale: Math.floor(Math.random() * Math.floor(32 - 12) + 12),
	opacity: Math.random(),
});

const App = () => {
	const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });
	return (
		<Layout>
			<BackgroundLayout>
				{Array.from({ length: isMobile ? 15 : 30 }, (_, k) => k + 1).map(index => (
					<Star {...randomLocalization()} key={index}>
						<FontAwesomeIcon icon={faStar} />
					</Star>
				))}
				<Moon>
					<FontAwesomeIcon icon={faMoon} />
				</Moon>
			</BackgroundLayout>
			<BackgroundShadow />
			<GlobalStyle />
			<Meteor>
				<FontAwesomeIcon icon={faMeteor} />
			</Meteor>
			<Name>Corentin Le Gal</Name>
			<Line />
			<Subtitle>Développeur fullstack</Subtitle>
			<LinksContainer>
				<Link href="https://github.com/Cohozen" target="_blank" rel="noopener noreferrer">
					<FontAwesomeIcon icon={faGithub} />
				</Link>
				<Link
					href="https://www.linkedin.com/in/corentin--le--gal/"
					target="_blank"
					rel="noopener noreferrer"
					animate={true}
				>
					<FontAwesomeIcon icon={faLinkedin} />
				</Link>
				<Link href="mailto:corentin.legal@proton.me" target="_blank" rel="noopener noreferrer">
					<FontAwesomeIcon icon={faEnvelopeSquare} />
				</Link>
			</LinksContainer>
			<SkillsContainer>
				<Skill icon="csharp/csharp-original" title={['C#']} />
				<Skill icon="dotnetcore/dotnetcore-plain" title={['.NET Core']} />
				<Skill icon="azure/azure-original" title={['Microsoft Azure']} />
				<Skill icon="react/react-original" title={['React']} />
				<Skill icon="vuejs/vuejs-original" title={['VueJs']} />
				<Skill icon="javascript/javascript-original" title={['Javascript']} />
				<Skill icon="typescript/typescript-original" title={['Typescript']} />
				<Skill icon="npm/npm-original-wordmark" title={['NPM']} />
				<Skill icon="webpack/webpack-original" title={['Webpack']} />
				<Skill fa icon={faEllipsisH} title={['Git', 'Redis', 'Sql Server', 'PostgreSql']} more={true} />
			</SkillsContainer>
		</Layout>
	);
};

export default App;
