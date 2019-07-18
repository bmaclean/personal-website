import React from 'react';
import {ParallaxLayer} from 'react-spring/renderprops-addons';

export default function ViewLayer({background, children, ...rest}) {
	return (
		<ParallaxLayer {...rest} factor={2} css={{zIndex: -1}}>
			<div
				css={{
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
