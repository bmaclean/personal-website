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
							aria-label="Name"
							name="name"
							margin="normal"
							variant="outlined"
							required
							css={{width: '48%'}}
						/>
						<TextField
							label="Company"
							aria-label="Company"
							name="company"
							margin="normal"
							variant="outlined"
							css={{width: '48%'}}
						/>
					</div>
					<div>
						<TextField
							label="Email"
							aria-label="Email"
							name="_replyTo"
							margin="normal"
							variant="outlined"
							required
							css={{width: '48%'}}
						/>
						<TextField
							label="Phone"
							aria-label="Phone"
							name="phone"
							margin="normal"
							variant="outlined"
							css={{width: '48%'}}
						/>
					</div>
					<div>
						<TextField
							label="What can I do for you today?"
							aria-label="What can I do for you today?"
							name="message"
							multiline
							margin="normal"
							variant="outlined"
							required
							css={{width: '100%'}}
						/>
					</div>
				</PaperForm>
			</ParallaxLayer>
		</>
	);
}
