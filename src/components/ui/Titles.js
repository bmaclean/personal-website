import React from 'react';
import {useTheme} from '../../hooks';

export const PageTitle = ({children, textStyles}) => {
	const theme = useTheme();

	return (
		<h1
			style={{
				color: theme.colors.contrastText,
				fontSize: '5em',
				[theme.breakpoints.down('sm')]: {
					fontSize: '2em'
				},
				...textStyles
			}}
		>
			{children}
		</h1>
	);
};

export const Subtitle = ({children, textStyles}) => {
	const theme = useTheme();

	return (
		<h2
			style={{
				color: theme.colors.contrastText,
				fontSize: '2em',
				[theme.breakpoints.down('sm')]: {
					fontSize: '1em'
				},
				...textStyles
			}}
		>
			{children}
		</h2>
	);
};
