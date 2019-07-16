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
						height: '100%',
						[theme.breakpoints.down('md')]: {
							alignItems: 'center',
							flexDirection: 'column',
							justifyContent: 'space-between',
							'& > *': {
								marginBottom: '5%'
							},
							marginBottom: '100%'
						}
					}}
				>
					<ServiceCard
						Icon={Code}
						title="WEB DESIGN"
						description="Make a good first impression and own your online presence with a professionally designed, 
									 responsive, and blazingly fast website."
					/>{' '}
					<ServiceCard
						Icon={Computer}
						title="CMS INTEGRATION"
						description="Combine the ease of use of a CMS with the optimization of a custom-built website. 
									 You'll have control over your content and leave website performance to the experts."
					/>{' '}
					<ServiceCard
						Icon={YoutubeSearchedFor}
						title="SEARCH ENGINE OPTIMIZATION"
						description="Get the most out of your website. Drive traffic to your online or retail business with a higher 
									 organic search ranking, increased page indexing rate, and cutting-edge SEO."
					/>{' '}
				</div>
			</ParallaxLayer>
		</>
	);
}
