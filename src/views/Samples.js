import React from 'react';
// import {Link} from 'gatsby';

import ViewLayer from '../components/ui/ViewLayer';
import {useTheme} from '../hooks';

export default function Samples({offset, speed}) {
	const theme = useTheme();

	return (
		<>
			<ViewLayer
				// TODO: main/dark variants of theme colors
				background={`linear-gradient(${theme.colors.primary}, #7181E0)`}
				offset={offset}
				speed={speed}
			></ViewLayer>
		</>
	);
}
