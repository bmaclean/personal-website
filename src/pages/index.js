import React from 'react';
// import {Link} from 'gatsby';

import {Parallax} from 'react-spring/renderprops-addons';

import {Layout, SEO} from '../components';
import {Contact, Greeting, Services} from '../views';

const IndexPage = () => {
	return (
		<Layout>
			<SEO title="Home" />
			<Parallax pages={3.2}>
				<Greeting offset={0} speed={0.5} />
				<Services offset={1} speed={0.5} />
				<Contact offset={2} speed={0.5} />
			</Parallax>
		</Layout>
	);
};

export default IndexPage;
