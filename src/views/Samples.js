import React from 'react';
// import {Link} from 'gatsby';

import {ParallaxLayer} from 'react-spring/renderprops-addons';

export default function Samples({offset, speed}) {
	return (
		<>
			<ParallaxLayer
				offset={offset}
				speed={speed}
				style={{
					background: '#256EFF',
					height: '120vh',
					marginTop: 0
				}}
			></ParallaxLayer>
		</>
	);
}
