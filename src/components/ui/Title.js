import React from 'react';
import {useTheme} from '../../hooks';

const styles = {
	page: resolution => ({
		fontSize: resolution === 'desktop' ? '5em' : '4em'
	}),
	subtitle: resolution => ({
		fontSize: resolution === 'desktop' ? '2em' : '2em'
	}),
	view: resolution => ({
		fontSize: resolution === 'desktop' ? '4em' : '3em'
	}),
};

export default function Title({children, variant, ...rest}) {
	const theme = useTheme();
	const titleStyles =
		variant === undefined
			? styles.view
			: styles[variant] ||
			  // eslint-disable-next-line no-console
			  console.error(
					'Invalid variant supplied to <Title>. Please provide one of: page, subtitle, view.'
			  );

	return (
		<h1
			css={{
				color: theme.colors.contrastText,
				[theme.breakpoints.down('sm')]: {
					...titleStyles('mobile')
				},
				[theme.breakpoints.up('sm')]: {
					...titleStyles('desktop')
				},
				...titleStyles
			}}
			{...rest}
		>
			{children}
		</h1>
	);
}
