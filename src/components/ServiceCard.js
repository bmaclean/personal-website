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
				width: '350px',
				[theme.breakpoints.down('sm')]: {
					width: '245px',
					height: '350px',
					[theme.breakpoints.down('sm')]: {
						alignItems: 'center',
						flexDirection: 'column',
						justifyContent: 'space-between'
					},
					marginBottom: '10%'
				}
			}}
			{...rest}
		>
			<div
				css={{
					alignItems: 'center',
					display: 'flex',
					flexDirection: 'column',
					height: '40%',
					justifyContent: 'center'
				}}
			>
				<div
					css={{
						alignItems: 'center',
						backgroundColor: '#AFCAFF',
						borderRadius: '50%',
						display: 'flex',
						height: '10ch',
						justifyContent: 'center',
						width: '10ch'
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
					alignItems: 'center',
					display: 'flex',
					flexDirection: 'column',
					height: '10%',
					justifyContent: 'center',
					textAlign: 'center'
				}}
			>
				<span>
					<b>{title}</b>
				</span>
			</div>
			<div
				css={{
					alignItems: 'center',
					display: 'flex',
					flexDirection: 'column',
					height: '50%',
					justifyContent: 'center',
					overflow: 'hidden',
					padding: '15px',
					textAlign: 'center'
				}}
			>
				<p>{description}</p>
			</div>
		</Card>
	);
}
