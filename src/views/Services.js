import React from 'react';
// import {Link} from 'gatsby';
import {ParallaxLayer} from 'react-spring/renderprops-addons';
import {Code, Computer, YoutubeSearchedFor} from '@material-ui/icons';

import {useTheme} from '../hooks';
import {ServiceCard, Title, ViewLayer} from '../components';

export default function Contact({offset, speed}) {
	const theme = useTheme();

	return (
		<>
			<ViewLayer
				// TODO: main/dark variants of theme colors
				background={`linear-gradient(${theme.colors.primary}, #74A2FF)`}
				offset={offset}
				speed={speed}
			></ViewLayer>
			<ParallaxLayer
				speed={1.5}
				offset={offset}
				css={{
					marginTop: '15%',
					display: 'flex',
					justifyContent: 'center',
					flexDirection: 'column',
					alignItems: 'center'
				}}
			>
				<Title
					variant="view"
					css={{
						color: theme.colors.contrastText
					}}
				>
					Services
				</Title>
				<div
					css={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-evenly',
						marginTop: '5%',
						width: '100%',
						[theme.breakpoints.down('sm')]: {
							alignItems: 'center',
							flexDirection: 'column',
							justifyContent: 'space-between'
						}
					}}
				>
					<ServiceCard
						Icon={Code}
						title="WEB DESIGN"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
					/>{' '}
					{/* WEB DESIGN */}
					<ServiceCard
						Icon={Computer}
						title="CMS INTEGRATION"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
					/>{' '}
					{/* CMS INTEGRATION "I .... to make it easier for you to manage your online business presence." */}
					<ServiceCard
						Icon={YoutubeSearchedFor}
						title="SEARCH ENGINE OPTIMIZATION"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
					/>{' '}
					{/* SEO */}
				</div>
			</ParallaxLayer>
		</>
	);
}
