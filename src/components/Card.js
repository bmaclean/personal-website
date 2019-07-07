import React from 'react';
import {useSpring, animated} from 'react-spring';

const calc = (x, y) => [
	-(y - window.innerHeight / 2) / 20,
	(x - window.innerWidth / 2) / 20,
	1.1
];
const trans = (x, y, s) =>
	`perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export default function Card({...rest}) {
	const [props, set] = useSpring(() => ({
		xys: [0, 0, 1],
		config: {mass: 20, tension: 250, friction: 150}
	}));
	return (
		<animated.div
			onMouseMove={({clientX: x, clientY: y}) => set({xys: calc(x, y)})}
			onMouseLeave={() => set({xys: [0, 0, 1]})}
			style={{
				transform: props.xys.interpolate(trans),
				width: '350px',
				height: '500px',
				background: 'grey',
				borderRadius: '5px',
				boxShadow: '20px 20px 50px -5px rgba(0, 0, 0, 0.7)',
				transition: 'box-shadow 0.5s',
				willChange: 'transform'
			}}
			{...rest}
		/>
	);
}
