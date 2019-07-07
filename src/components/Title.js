import React from 'react';
import {useTheme} from '../hooks';

const styles = {
	page: resolution => ({
		fontSize: resolution === 'desktop' ? '5em' : '4em'
	}),
	subtitle: resolution => ({
		fontSize: resolution === 'desktop' ? '2em' : '2em'
	}),
	view: resolution => ({
		fontSize: resolution === 'desktop' ? '4em' : '3em'
	})
};

const Header = ({children, variant, ...rest}) => {
	return variant === 'subtitle' ? (
		<h2 {...rest}>{children}</h2>
	) : (
		<h1 {...rest}>{children}</h1>
	);
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
		<Header
			variant={variant}
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
		</Header>
	);
}
