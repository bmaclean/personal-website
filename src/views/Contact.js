import React from 'react';
// import {Link} from 'gatsby';

import ViewLayer from '../components/ui/ViewLayer';
import {useTheme} from '../hooks';
import {Title} from '../components/ui';

export default function Contact({offset, speed}) {
	const theme = useTheme();

	return (
		<>
			<ViewLayer
				// TODO: main/dark variants of theme colors
				background={`linear-gradient(${theme.colors.secondary}, #EAEFF7)`}
				offset={offset}
				speed={speed}
			>
				<Title
					variant="view"
					css={{
						marginLeft: '10%',
						marginTop: '30%',
						// TODO: theme color main/light/dark
						color: '#0B1722'
					}}
				>
					Contact
				</Title>
			</ViewLayer>
		</>
	);
}
