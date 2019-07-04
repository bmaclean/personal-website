import React from 'react';
// import {Link} from 'gatsby';

import {Parallax} from 'react-spring/renderprops-addons';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Greeting from '../views/Greeting';
import Contact from '../views/Contact';
import {SocialBanner} from '../components';;

const IndexPage = () => {
	return (
		<Layout>
			<SEO title="Home" />
			<Parallax pages={2.4}>
				<Greeting offset={0} speed={0.5} />
				<Contact offset={1} speed={0.5} />
				<SocialBanner
					css={{
						position: 'absolute',
						bottom: '0'
					}}
				/>
			</Parallax>
		</Layout>
	);
};

export default IndexPage;
