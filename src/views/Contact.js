import React, {useState} from 'react';
// import {Link} from 'gatsby';
import {TextField} from '@material-ui/core';
import {ParallaxLayer} from 'react-spring/renderprops-addons';

import {useTheme} from '../hooks';
import {PaperForm, Title, ViewLayer} from '../components';

export default function Contact({offset, speed, onSubmit}) {
	const theme = useTheme();
	const [name, setName] = useState('');
	const [company, setCompany] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [description, setDescription] = useState('');

	const resetForm = () => {
		setName('');
		setCompany('');
		setEmail('');
		setPhone('');
		setDescription('');
	}

	return (
		<>
			<ViewLayer
				// TODO: main/dark variants of theme colors
				background={`linear-gradient(${theme.colors.secondary}, #EAEFF7)`}
				offset={offset}
				speed={speed}
			></ViewLayer>
			<ParallaxLayer
				speed={1.5}
				offset={offset}
				css={{
					marginTop: '18%',
					display: 'flex',
					justifyContent: 'center',
					flexDirection: 'column',
					alignItems: 'center'
				}}
			>
				<Title
					variant="view"
					css={{
						// TODO: theme color main/light/dark
						color: '#0B1722'
					}}
				>
					Contact
				</Title>
				<PaperForm
					css={{marginTop: '2rem'}}
					fields={{name, company, email, phone, description}}
					onSubmit={() => {onSubmit(); resetForm();}}
				>
					<div>
						<TextField
							label="Name"
							aria-label="Name"
							name="name"
							value={name}
							onChange={e => setName(e.target.value)}
							margin="normal"
							variant="outlined"
							required
							css={{width: '48%'}}
						/>
						<TextField
							label="Company"
							aria-label="Company"
							type="text"
							name="company"
							value={company}
							onChange={e => setCompany(e.target.value)}
							margin="normal"
							variant="outlined"
							css={{width: '48%'}}
						/>
					</div>
					<div>
						<TextField
							label="Email"
							aria-label="Email"
							type="email"
							name="email"
							placeholder="name@example.com"
							value={email}
							onChange={e => setEmail(e.target.value)}
							margin="normal"
							variant="outlined"
							required
							css={{width: '48%'}}
						/>
						<TextField
							label="Phone"
							aria-label="Phone"
							type="tel"
							name="tel"
							placeholder="(XXX) XXX-XXXX"
							value={phone}
							onChange={e => setPhone(e.target.value)}
							margin="normal"
							variant="outlined"
							css={{width: '48%'}}
						/>
					</div>
					<div>
						<TextField
							label="Message"
							aria-label="Message"
							type="text"
							name="description"
							placeholder="Please describe your web project and online business needs."
							value={description}
							onChange={e => setDescription(e.target.value)}
							multiline
							margin="normal"
							variant="outlined"
							required
							css={{width: '100%'}}
						/>
					</div>
				</PaperForm>
			</ParallaxLayer>
		</>
	);
}
