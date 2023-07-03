import { Layout, Popper } from './Skill.style';

const Skill = ({ title, more, ...props }) => {
	return (
		<Layout more={more}>
			{props.children}
			<Popper>
				{title.map((t, index) => (
					<p key={index}>{t}</p>
				))}
			</Popper>
		</Layout>
	)
};

export default Skill;
