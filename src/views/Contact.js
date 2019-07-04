import React from 'react';
// import {Link} from 'gatsby';
import {TextField} from '@material-ui/core';
import {ParallaxLayer} from 'react-spring/renderprops-addons';

import {useTheme} from '../hooks';
import {PaperForm} from '../components';
import {Title, ViewLayer} from '../components/ui';

export default function Contact({offset, speed}) {
	const theme = useTheme();

	return (
		<>
			<ViewLayer
				// TODO: main/dark variants of theme colors
				background={`linear-gradient(${theme.colors.secondary}, #EAEFF7)`}
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
						// TODO: theme color main/light/dark
						color: '#0B1722'
					}}
				>
					Contact
				</Title>
				<PaperForm css={{marginTop: '2rem'}}>
					<div>
						<TextField
							label="Name"
							margin="normal"
							variant="outlined"
							// required
							css={{width: '40%'}}
						/>
						<TextField
							label="Company"
							margin="normal"
							variant="outlined"
							css={{width: '40%'}}
						/>
					</div>
					<div>
						<TextField
							label="Email"
							margin="normal"
							variant="outlined"
							// required
							css={{width: '40%'}}
						/>
						<TextField
							label="Phone"
							margin="normal"
							variant="outlined"
							css={{width: '40%'}}
						/>
					</div>
					<div>
						<TextField
							label="What can I do for you today?"
							multiline
							margin="normal"
							variant="outlined"
							// required
							css={{width: '100%'}}
						/>
					</div>
				</PaperForm>
			</ParallaxLayer>
		</>
	);
}
