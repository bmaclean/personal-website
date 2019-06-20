import React from 'react';
// import {Link} from 'gatsby';

import {Parallax} from 'react-spring/renderprops-addons';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Greeting from '../views/Greeting';
import Samples from '../views/Samples';

const IndexPage = () => {
	return (
		<Layout>
			<SEO title="Home" />
			<Parallax pages={3}>
				<Greeting offset={0} speed={0.5} />
				<Samples offset={1} speed={0.5} />
			</Parallax>
		</Layout>
	);
};

export default IndexPage;
