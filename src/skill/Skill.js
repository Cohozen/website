import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Layout, Popper } from './Skill.style';

const Skill = ({ title, icon, more, fa = false }) => (
	<Layout more={more}>
		{(fa && <FontAwesomeIcon icon={icon} />) || (
			<img src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}.svg`} alt={icon} width={56} />
		)}
		<Popper>
			{title.map((t, index) => (
				<p key={index}>{t}</p>
			))}
		</Popper>
	</Layout>
);

export default Skill;
