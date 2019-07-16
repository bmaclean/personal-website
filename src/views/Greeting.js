import React from 'react';
// import {Link} from 'gatsby';
import {ParallaxLayer} from 'react-spring/renderprops-addons';

import {useTheme} from '../hooks';
import {ProfileCard, Title} from '../components';

const BoldGreetingText = ({children}) => (
	<b
		css={{
			background: '-webkit-linear-gradient(#EBF1FF, #88AFFF)',
			'-webkit-background-clip': 'text',
			'-webkit-text-fill-color': 'transparent'
		}}
	>
		{children}
	</b>
);

// TODO: animation reliant on card's position on screen
export default function Greeting({offset, speed}) {
	const theme = useTheme();

	return (
		<div>
			<ParallaxLayer
				factor={1.8}
				offset={offset}
				speed={speed}
				css={{
					background: theme.colors.background,
					zIndex: -1
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
						I create <BoldGreetingText>professional</BoldGreetingText>,
						<BoldGreetingText> high-powered</BoldGreetingText>
						<br /> web experiences for growing businesses.
					</Title>
				</span>
				<ProfileCard />
			</ParallaxLayer>
		</div>
	);
}
