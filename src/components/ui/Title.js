import React from 'react';
import {useTheme} from '../../hooks';

const styles = {
	page: {
		fontSize: '5em'
	},
	subtitle: {
		fontSize: '2em'
	},
	view: {
		fontSize: '4em'
	}
};

export default function Title({children, variant}) {
	const theme = useTheme();
	const titleStyles =
		styles[variant] ||
		// eslint-disable-next-line no-console
		console.error(
			'Invalid variant supplied to <Title>. Please provide one of: page, subtitle, view.'
		);

	return (
		<h1
			style={{
				color: theme.colors.contrastText,
				[theme.breakpoints.down('sm')]: {
					fontSize: '2em'
				},
				...titleStyles
			}}
		>
			{children}
		</h1>
	);
}
