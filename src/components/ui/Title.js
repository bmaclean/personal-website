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
					fontSize: '2em'
				},
				...titleStyles
			}}
			{...rest}
		>
			{children}
		</h1>
	);
}
