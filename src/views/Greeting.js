import React from 'react';
// import {Link} from 'gatsby';
import {ParallaxLayer} from 'react-spring/renderprops-addons';

import {useTheme} from '../hooks';
import {ProfileCard, Title} from '../components';

export default function Greeting({offset, speed}) {
	const theme = useTheme();

	return (
		<div>
			<ParallaxLayer
				factor={1.8}
				offset={offset}
				speed={speed}
				css={{
					background: theme.colors.background
				}}
			></ParallaxLayer>

			<ParallaxLayer
				offset={offset}
				speed={1.5}
				css={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'space-evenly',
					[theme.breakpoints.down('md')]: {
						flexDirection: 'column',
						justifyContent: 'center'
					}
				}}
			>
				<span>
					<Title variant="page" css={{marginBottom: 0}}>
						Welcome <br />
					</Title>
					<Title variant="subtitle">to Brendan Maclean Web Services.</Title>
					<Title variant="subtitle">
						I create <b style={{color: theme.colors.primary}}>professional</b>,{' '}
						<b style={{color: theme.colors.primary}}>high-powered </b>
						<br /> web experiences for local businesses.
					</Title>
				</span>
				<ProfileCard />
			</ParallaxLayer>
		</div>
	);
}
