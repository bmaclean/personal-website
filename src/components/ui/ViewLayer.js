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
					clipPath: 'polygon(0 15%, 100% 25%, 100% 85%, 0 75%)'
				}}
			>
				{children}
			</div>
		</ParallaxLayer>
	);
}

// export const Divider = styled(ParallaxLayer)`
//   ${tw`absolute w-full h-full`};
//   background: ${props => props.bg};
//   svg {
//     fill: ${props => props.fill};
//   }
//   clip-path: ${props => props.clipPath};
// `

// export const DividerMiddle = styled(Divider)`
//   clip-path: polygon(0 15%, 100% 25%, 100% 85%, 0 75%);
// `
