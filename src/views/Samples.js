import React from 'react';
// import {Link} from 'gatsby';

import ViewLayer from '../components/ui/ViewLayer';
import {useTheme} from '../hooks';
import {PageTitle} from '../components/ui/Titles';

export default function Samples({offset, speed}) {
	const theme = useTheme();

	return (
		<>
			<ViewLayer
				// TODO: main/dark variants of theme colors
				background={`linear-gradient(${theme.colors.primary}, #7181E0)`}
				offset={offset}
				speed={speed}
			>
				<PageTitle style={{
					color: 'black',
					marginTop: '500px'
				}}>Sfds</PageTitle>
			</ViewLayer>
		</>
	);
}
