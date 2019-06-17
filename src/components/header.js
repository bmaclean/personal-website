import {Link} from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({siteTitle}) => (
	<header
		style={{
			background: '#0B1722',
			display: 'flex',
			height: '50px',
			justifyContent: 'center',
			marginBottom: '1.45rem',
			marginTop: '0px'
		}}
	>
		<div
			style={{
				alignItems: 'center',
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'space-between',
				width: '30rem'
			}}
		>
			<span style={{}}>
				<Link
					to="/"
					style={{
						color: 'white',
						textDecoration: 'none'
					}}
				>
					About
				</Link>
			</span>

			<span style={{}}>
				<Link
					to="/"
					style={{
						color: 'white',
						textDecoration: 'none'
					}}
				>
					Samples
				</Link>
			</span>

			<span style={{}}>
				<Link
					to="/"
					style={{
						color: 'white',
						textDecoration: 'none'
					}}
				>
					Portfolio
				</Link>
			</span>

			<span style={{}}>
				<Link
					to="/"
					style={{
						color: 'white',
						textDecoration: 'none'
					}}
				>
					Contact
				</Link>
			</span>
		</div>
	</header>
);

Header.propTypes = {
	siteTitle: PropTypes.string
};

Header.defaultProps = {
	siteTitle: ''
};

export default Header;
