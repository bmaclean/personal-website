import React from 'react';
import {Card} from './';

export default function ServiceCard({animationProps, ...rest}) {
	return (
		<Card
			style={{
				background: 'grey',
				borderRadius: '5px',
				height: '500px',
				width: '350px'
			}}
			{...rest}
		/>
	);
}

