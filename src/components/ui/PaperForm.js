import React from 'react';

import {useTheme} from '../../hooks';

export default function PaperForm({children, ...rest}) {
	const theme = useTheme();

	return (
		<div
			css={{
				// TODO: organize CSS attributes in all inline styles
				paddingTop: '2rem',
				paddingBottom: '2rem',
				background: theme.colors.contrastText,
				display: 'flex',
				flexDirection: 'column',
				width: '50%',
				boxShadow: '20px 20px 50px -5px rgba(0, 0, 0, 0.7)',
				'& > *': {
					marginTop: '1rem',
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-evenly',
					width: '100%'
				}
			}}
			{...rest}
		>
			{children}
		</div>
	);
}
