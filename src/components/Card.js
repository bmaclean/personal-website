import React from 'react';
import {useSpring, animated} from 'react-spring';

// TODO: rotate animation relative to card position on screen (0 +- distance from pointer to center of card)
const calc = (x, y) => [0, 0, 1.1];

const trans = (x, y, s) =>
	`perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export default function Card({children, ...rest}) {
	const [props, set] = useSpring(() => ({
		xys: [0, 0, 1],
		config: {mass: 5, tension: 350, friction: 40}
	}));
	return (
		<animated.div
			onMouseMove={({clientX: x, clientY: y}) => set({xys: calc(x, y)})}
			onMouseLeave={() => set({xys: [0, 0, 1]})}
			style={{
				transform: props.xys.interpolate(trans),
				borderRadius: '5px',
				boxShadow: '20px 20px 50px -5px rgba(0, 0, 0, 0.7)',
				transition: 'box-shadow 0.5s',
				willChange: 'transform'
			}}
			{...rest}
		>
			{children}
		</animated.div>
	);
}
