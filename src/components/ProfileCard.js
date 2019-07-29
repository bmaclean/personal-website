import React from 'react';

import {useTheme} from '../hooks';
import ProfileImage from '../images/temp-logo.png';
import {Card} from './';

// TODO: Suspense for image loading

export default function ProfileCard() {
	const theme = useTheme();

	return (
		<Card
			css={{
				width: '280px',
				height: '400px',
				background: 'white',
				borderRadius: '5px',
				backgroundImage: `url(${ProfileImage})`,
				backgroundSize: 'auto',
				backgroundPosition: 'center center',
				backgroundRepeat: 'no-repeat',
				boxShadow: '20px 20px 50px -5px rgba(0, 0, 0, 0.7)',
				transition: 'box-shadow 0.5s',
				[theme.breakpoints.down('sm')]: {
					width: '210px',
					height: '300px'
				}
			}}
		/>
	);
}
