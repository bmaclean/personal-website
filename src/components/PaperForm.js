import React, {useState} from 'react';
import {navigate} from 'gatsby';
import {Button} from '@material-ui/core';
import ReCAPTCHA from 'react-google-recaptcha';

import {useTheme} from '../hooks';

function encode(data) {
	return Object.keys(data)
		.map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
		.join('&');
}

export default function PaperForm({children, onSubmit, fields, ...rest}) {
	const [verified, setVerified] = useState(false);
	const theme = useTheme();

	const handleSubmit = e => {
		e.preventDefault();
		const form = e.target;
		fetch('/', {
			method: 'POST',
			headers: {'Content-Type': 'application/x-www-form-urlencoded'},
			body: encode({
				'form-name': form.getAttribute('name'),
				...fields
			})
		})
			.then(() => {
				onSubmit();
			})
			.catch(error => {
				console.warn(error);
			});
	};

	const recaptchaSubmit = e => {
		setVerified(true);
	};

	return (
		<form
			name="contact"
			method="POST"
			onSubmit={handleSubmit}
			data-netlify="true"
			data-netlify-honeypot="bot-field"
			css={{
				// TODO: organize CSS attributes in all inline styles
				padding: '3rem',
				paddingTop: '1rem',
				borderRadius: '5px',
				background: theme.colors.contrastText,
				display: 'flex',
				flexDirection: 'column',
				width: '960px',
				boxShadow: '20px 20px 50px -5px rgba(0, 0, 0, 0.7)',
				'& > *': {
					marginTop: '1rem',
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
					width: '100%'
				},
				[theme.breakpoints.down('md')]: {
					width: '600px'
				},
				[theme.breakpoints.down('sm')]: {
					padding: '1rem',
					width: '280px',
					'& > *': {
						flexDirection: 'column',
						alignItems: 'center',
						width: '100%',
						'& > *': {
							width: '100% !important'
						}
					}
				}
			}}
			{...rest}
		>
			<input type="hidden" name="form-name" value="contact" />
			{/* Used to detect spam bots */}
			<input type="hidden" name="bot-field" />
			{children}
			<div
				css={{
					display: 'flex',
					flexDirection: 'row',
					marginTop: '4rem',
					width: '100%',
					[theme.breakpoints.down('md')]: {
						justifyContent: 'center',
						alignItems: 'center'
					}
				}}
			>
				{verified ? (
					<Button
						variant="contained"
						color="primary"
						type="submit"
						css={{height: '50px', width: '200px', marginTop: '2rem'}}
					>
						Send
					</Button>
				) : (
					<ReCAPTCHA
						sitekey="6Lfm1iwUAAAAABEzDr2bDQh-211dwCmTZFz-XXDF"
						onChange={recaptchaSubmit}
						css={{
							transform: 'scale(0.80) !important',
							'-webkit-transform': 'scale(0.80) !important',
							'transform-origin': '0 0 !important',
							'-webkit-transform-origin': '0 0 !important'
						}}
					/>
				)}

				<div></div>
			</div>
		</form>
	);
}
