import React from 'react';
import {useSpring, animated} from 'react-spring';
import injectSheet from 'react-jss';
import ProfileImage from '../../images/profile_image.png';

const styles = {
	card: {
		width: '30ch',
		height: '45ch',
		background: 'grey',
		borderRadius: '5px',
		backgroundImage: `url(${ProfileImage})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center center',
		boxShadow: '0px 10px 30px -5px rgba(0, 0, 0, 0.3)',
		transition: 'box-shadow 0.5s',
		willChange: 'transform',
		border: '15px solid white'
	}
};

const calc = (x, y) => [
	-(y - window.innerHeight / 2) / 20,
	(x - window.innerWidth / 2) / 20,
	1.1
];
const trans = (x, y, s) =>
	`perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

function ProfileCard({classes}) {
	const [props, set] = useSpring(() => ({
		xys: [0, 0, 1],
		config: {mass: 20, tension: 100, friction: 40}
	}));
	return (
		<animated.div
			className={classes.card}
			onMouseMove={({clientX: x, clientY: y}) => set({xys: calc(x, y)})}
			onMouseLeave={() => set({xys: [0, 0, 1]})}
			style={{
				transform: props.xys.interpolate(trans),
				marginLeft: '52rem',
				marginTop: '6rem'
			}}
		/>
	);
}

export default injectSheet(styles)(ProfileCard);
