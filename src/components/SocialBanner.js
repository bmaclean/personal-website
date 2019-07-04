import React from 'react';
import FacebookIcon from '../images/facebook-icon.png';
import GithubIcon from '../images/github-icon.png';
import LinkedinIcon from '../images/linkedin-icon.png';

export default function SocialBanner({...rest}) {
	return (
		<div
			{...rest}
			css={{
				display: 'flex',
				padding: '0 10% 10% 10%',
				paddingRight: '10%',
				justifyContent: 'space-evenly',
				height: '50px',
				width: '100%'
			}}
		>
			<a
				href="https://www.linkedin.com/in/brendan-maclean-329642a2/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img src={LinkedinIcon} />
			</a>
			<a
				href="https://github.com/bmaclean"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img src={GithubIcon} />
			</a>
			<a href="/404" target="_blank" rel="noopener noreferrer">
				<img src={FacebookIcon} />
			</a>
		</div>
	);
}
