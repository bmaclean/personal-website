import React, {useState} from 'react';
import {Button} from '@material-ui/core';
import ReCAPTCHA from 'react-google-recaptcha';

import {useTheme} from '../hooks';

export default function PaperForm({children, ...rest}) {
	const [verified, setVerified] = useState(false);
	const theme = useTheme();

	const handleSubmit = e => {
		e.preventDefault();
		console.log('submitted');
	};

	const recaptchaSubmit = e => {
		setVerified(true);
	};

	return (
		<form
			autoComplete="on"
			onSubmit={handleSubmit}
			name="contact"
			method="POST"
			data-netlify="true"
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
					width: '340px',
					'& > *': {
						flexDirection: 'column',
						alignItems: 'center',
						'& > *': {
							width: '100%'
						}
					}
				}
			}}
			{...rest}
		>
			{children}
			<div
				css={{
					display: 'flex',
					flexDirection: 'row',
					marginTop: '4rem'
				}}
			>
				{verified ? (
					<Button
						variant="contained"
						color="primary"
						type="submit"
						css={{height: '50px', width: '20%', marginTop: '2rem'}}
					>
						Send
					</Button>
				) : (
					<ReCAPTCHA
						sitekey="6Lfm1iwUAAAAABEzDr2bDQh-211dwCmTZFz-XXDF"
						onChange={recaptchaSubmit}
					/>
				)}

				<div></div>
			</div>
		</form>
	);
}
