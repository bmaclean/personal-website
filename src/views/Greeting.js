import React from 'react';
// import {Link} from 'gatsby';

import {ParallaxLayer} from 'react-spring/renderprops-addons';

import {useTheme} from '../hooks';
import {PageTitle, Subtitle} from '../components/ui/Titles';
import ProfileCard from '../components/ui/ProfileCard';

export default function Greeting({offset, speed}) {
	const theme = useTheme();

	return (
		<>
			<ParallaxLayer
				factor={1.5}
				offset={offset}
				speed={speed}
				style={{
					background: theme.colors.background
				}}
			></ParallaxLayer>

			<ParallaxLayer offset={offset} speed={1.0}>
				<PageTitle
					textStyles={{
						marginTop: '10rem',
						marginLeft: '8rem'
					}}
					color={theme.colors.contrastText}
				>
					Hello, <br />
					I&apos;m Brendan.
				</PageTitle>
				<Subtitle
					textStyles={{
						marginTop: '1rem',
						marginLeft: '8rem'
					}}
					color={theme.colors.contrastText}
				>
					I create{' '}
					<span style={{color: theme.colors.tertiary}}>responsive</span>,{' '}
					<span style={{color: theme.colors.secondary}}>aesthetic</span>, <br />
					and <span style={{color: theme.colors.primary}}>
						blazingly fast
					</span>{' '}
					web experiences.
				</Subtitle>
			</ParallaxLayer>

			<ParallaxLayer offset={offset} speed={1.5}>
				<ProfileCard />
			</ParallaxLayer>
		</>
	);
}
