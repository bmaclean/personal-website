import React from 'react';
import {ParallaxLayer} from 'react-spring/renderprops-addons';

export default function ViewLayer({background, children, ...props}) {
	return (
		<ParallaxLayer {...props} factor={2.5}>
			<div
				style={{
					position: 'absolute',
					background,
					width: '100%',
					height: '100%',
					clipPath: 'polygon(0 0, 100% 8%, 100% 100%, 0 100%)'
				}}
			>
				{children}
			</div>
		</ParallaxLayer>
	);
}
