import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import {useTheme} from '../hooks';
import {Title} from '../components';

export default function NotFoundPage() {
	const theme = useTheme();
	return (
		<Layout>
			<div
				css={{
					position: 'absolute',
					height: '100%',
					width: '100%',
					background: theme.colors.background
				}}
			>
				<SEO title="404: Not found" />
				<div
					css={{
						marginTop: '10%',
						marginLeft: '10%'
					}}
				>
					<Title variant="page">Not found.</Title>
					<Title
						css={{
							marginTop: '1rem'
						}}
						variant="subtitle"
					>
						Double check the URL and try again.
					</Title>
				</div>

				<p></p>
			</div>
		</Layout>
	);
}
