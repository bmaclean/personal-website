import React from 'react';
// import {Link} from 'gatsby';

import {Parallax} from 'react-spring/renderprops-addons';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Greeting from '../views/Greeting';
import Contact from '../views/Contact';

const IndexPage = () => {
	const DEV = process.env.NODE_ENV === 'development';

	return (
		<Layout>
			<SEO title="Home" />
			<Parallax pages={DEV ? 2 : 3}>
				<Greeting offset={0} speed={0.5} />
				<Contact offset={0.8} speed={0.5} />
			</Parallax>
		</Layout>
	);
};

export default IndexPage;
