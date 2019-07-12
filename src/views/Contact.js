import React, {useState} from 'react';
// import {Link} from 'gatsby';
import {TextField} from '@material-ui/core';
import {ParallaxLayer} from 'react-spring/renderprops-addons';

import {useTheme} from '../hooks';
import {PaperForm, Title, ViewLayer} from '../components';

export default function Contact({offset, speed}) {
	const theme = useTheme();
	const [name, setName] = useState('');
	const [company, setCompany] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [description, setDescription] = useState('');

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
				<PaperForm css={{marginTop: '2rem'}}>
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
							name="email"
							type="email"
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
							type="phone"
							name="phone"
							value={phone}
							onChange={e => setPhone(e.target.value)}
							margin="normal"
							variant="outlined"
							css={{width: '48%'}}
						/>
					</div>
					<div>
						<TextField
							label="Please describe your web project and online business needs."
							aria-label="Please describe your web project and online business needs."
							name="description"
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
