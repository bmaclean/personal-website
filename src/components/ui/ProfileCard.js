import React from 'react';
import {useSpring, animated} from 'react-spring';
import ProfileImage from '../../images/profile_image.png';

const calc = (x, y) => [
	-(y - window.innerHeight / 2) / 20,
	(x - window.innerWidth / 2) / 20,
	1.1
];
const trans = (x, y, s) =>
	`perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export default function ProfileCard() {
	const [props, set] = useSpring(() => ({
		xys: [0, 0, 1],
		config: {mass: 20, tension: 200, friction: 50}
	}));
	return (
		<animated.div
			onMouseMove={({clientX: x, clientY: y}) => set({xys: calc(x, y)})}
			onMouseLeave={() => set({xys: [0, 0, 1]})}
			style={{
				transform: props.xys.interpolate(trans),
				width: '20vw',
				height: '30vw',
				background: 'grey',
				borderRadius: '5px',
				backgroundImage: `url(${ProfileImage})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center center',
				boxShadow: '20px 20px 50px -5px rgba(0, 0, 0, 0.7)',
				transition: 'box-shadow 0.5s',
				willChange: 'transform',
				// TODO: margins should be set from Greeting view
				// marginLeft: '65vw',
				marginTop: '16vh'
			}}
		/>
	);
}
