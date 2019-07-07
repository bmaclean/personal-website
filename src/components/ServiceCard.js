import React from 'react';

import {useTheme} from '../hooks';
import {Card} from './';

// TODO: 'inverted' color scheme
export default function ServiceCard({
	animationProps,
	description,
	Icon,
	title,
	...rest
}) {
	const theme = useTheme();

	return (
		<Card
			css={{
				background: 'white',
				borderRadius: '5px',
				height: '500px',
				width: '350px'
			}}
			{...rest}
		>
			{/* <div
			css={{
				height: '20%',
				borderBottom: `3px solid ${theme.colors.primary}`
			}}
			>
			HEADER
			</div> */}
			<div
				css={{
					height: '40%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					flexDirection: 'column'
				}}
			>
				<div
					css={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						height: '10ch',
						width: '10ch',
						backgroundColor: '#AFCAFF',
						borderRadius: '50%'
					}}
				>
					<Icon
						css={{
							color: 'white',
							minHeight: '4ch',
							minWidth: '4ch'
						}}
					/>
				</div>
			</div>
			<div
				css={{
					height: '10%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					flexDirection: 'column'
				}}
			>
				<span>
					<b>{title}</b>
				</span>
			</div>
			<div
				css={{
					height: '50%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					flexDirection: 'column',
					textAlign: 'center',
					padding: '15px'
				}}
			>
				<p>{description}</p>
			</div>
		</Card>
	);
}
