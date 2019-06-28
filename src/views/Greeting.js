import React from 'react';
// import {Link} from 'gatsby';
import {ParallaxLayer} from 'react-spring/renderprops-addons';

import {useTheme} from '../hooks';
import {PageTitle, Subtitle} from '../components/ui/Titles';
import ProfileCard from '../components/ui/ProfileCard';

export default function Greeting({offset, speed}) {
	const theme = useTheme();

	return (
		<div>
			<ParallaxLayer
				factor={1.5}
				offset={offset}
				speed={speed}
				style={{
					background: theme.colors.background
				}}
			></ParallaxLayer>

			<ParallaxLayer
				offset={offset}
				speed={1.0}
				style={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'space-evenly',
					[theme.breakpoints.down('sm')]: {
						flexDirection: 'column',
						justifyContent: 'center'
					}
				}}
			>
				<span>
					<PageTitle color={theme.colors.contrastText}>
						Hello, <br />
						I&apos;m Brendan.
					</PageTitle>
					<Subtitle textStyles={{}} color={theme.colors.contrastText}>
						I create{' '}
						<span style={{color: theme.colors.primary}}>responsive</span>,{' '}
						<span style={{color: theme.colors.primary}}>elegant</span>, <br />
						and{' '}
						<span style={{color: theme.colors.primary}}>
							blazingly fast
						</span>{' '}
						web experiences.
					</Subtitle>
				</span>
				<ProfileCard />
			</ParallaxLayer>
		</div>
	);
}
